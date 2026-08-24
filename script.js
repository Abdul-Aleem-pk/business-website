const WA_NUMBER = "923710785292";

const services = {
  cardiology:{name:"Cardiology & Heart Care",icon:"♥",doctor:"Dr. Ayesha Rahman",experience:"12+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnFmJhiWeN47h8U191mO43T6FHhyoMleic83HCYcJOQ&s=10",desc:"Complete cardiovascular evaluation, blood-pressure management, ECG guidance, preventive heart care and long-term cardiac follow-up."},
  diagnostics:{name:"Advanced Diagnostics",icon:"⌁",doctor:"Dr. Hamza Malik",experience:"10+ years",image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",desc:"Modern diagnostic support including laboratory coordination, imaging referrals, health screening and physician-led interpretation."},
  pediatrics:{name:"Pediatrics & Child Health",icon:"✚",doctor:"Dr. Sara Khalid",experience:"9+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bKVb4ITqeuLRCtG8iEr0pv-uVRKdZ8Xgz4t3OOEE9Q&s=10",desc:"Compassionate pediatric consultations, growth monitoring, vaccination guidance and treatment plans for common childhood conditions."},
  dermatology:{name:"Dermatology & Skin Care",icon:"✦",doctor:"Dr. Maryam Noor",experience:"8+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0nCdXn9eoRNrmMYY3gJTKeDpCtMf5bZurDGfXY_d7w&s=10",desc:"Evidence-based care for acne, pigmentation, allergies, infections and general skin-health concerns."},
  orthopedics:{name:"Orthopedics & Pain Care",icon:"⚕",doctor:"Dr. Bilal Ahmed",experience:"14+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQ1BjF1JqTN5APDz2hmw54xo_gEu-2XqO0EVMzfqXBZ-EHQInh2cZg_k&s=10",desc:"Musculoskeletal assessment, joint and back-pain management, injury rehabilitation guidance and orthopedic referrals."},
  gynecology:{name:"Women's Health & Gynecology",icon:"♀",doctor:"Dr. Hina Tariq",experience:"11+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl39wzMA91kSvqfF6D8wroUuI5_vCbOJ-NkcU2Rbqhv9WfL55MTBHaRw&s=10",desc:"Respectful women's health consultations, routine gynecological care, preventive screening and personalized follow-up."}
};

const doctors = {
  ayesha:{name:"Dr. Ayesha Rahman",position:"Consultant Cardiologist",qualification:"MBBS, FCPS (Cardiology)",experience:"12+ years",image:"https://thumbs.dreamstime.com/b/confident-positive-female-doctor-white-uniform-stethoscope-confident-positive-young-female-doctor-white-uniform-346389860.jpg",desc:"Focused on preventive cardiology, hypertension, heart-risk assessment and patient education."},
  hamza:{name:"Dr. Hamza Malik",position:"Consultant Physician",qualification:"MBBS, FCPS (Medicine)",experience:"10+ years",image:"https://img.magnific.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg?semt=ais_hybrid&w=740&q=80",desc:"Provides comprehensive adult medical care with a practical, patient-first approach."},
  sara:{name:"Dr. Sara Khalid",position:"Consultant Pediatrician",qualification:"MBBS, DCH",experience:"9+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzIr3mrGjgRmDkIAUHF2YpnKJ6LoRfg59dSCZzDCl7A&s=10",desc:"Dedicated to child wellness, developmental monitoring and family-centered pediatric care."},
  maryam:{name:"Dr. Maryam Noor",position:"Consultant Dermatologist",qualification:"MBBS, FCPS (Dermatology)",experience:"8+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxPot4xWgIJmr7o2Ox60xV9WBeeBkAFlWNyMhPsTfBmgBUe-MZ-ju5y0I&s=10",desc:"Treats a broad range of skin conditions while emphasizing clear, sustainable care plans."},
  bilal:{name:"Dr. Bilal Ahmed",position:"Orthopedic Consultant",qualification:"MBBS, FCPS (Orthopedics)",experience:"14+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2w0Ba7COnBap867ul1N7wPsxPzITgdp45STct3cXMS07ZJUUoRqPOmSm&s=10",desc:"Experienced in orthopedic assessment, pain management and rehabilitation planning."},
  hina:{name:"Dr. Hina Tariq",position:"Consultant Gynecologist",qualification:"MBBS, FCPS (Gynecology)",experience:"11+ years",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gsyZBI-q_xltYmjC8MubhEwDv_Oq3sDwwiNWSAlfJ8Tg9Y7S4Ldp3Lw&s=10",desc:"Provides supportive women's healthcare with an emphasis on prevention, privacy and continuity."}
};

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  setupFaqs();
  setupWhatsAppForms();
  setupCards();
  setupModal();
  setActiveNav();
});

function setupMenu(){
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if(!menuBtn || !nav) return;
  menuBtn.addEventListener("click", () => {
    const opened = nav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(opened));
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("show"));
  });
}

function setupFaqs(){
  document.querySelectorAll(".faq button").forEach(button => {
    button.addEventListener("click", () => {
      const faq = button.closest(".faq");
      if(!faq) return;
      const isOpen = faq.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function setupWhatsAppForms(){
  document.querySelectorAll("[data-wa-form]").forEach(form => bindWhatsAppForm(form));
}

function bindWhatsAppForm(form){
  if(!form || form.dataset.bound === "true") return;
  form.dataset.bound = "true";
  form.addEventListener("submit", event => {
    event.preventDefault();

    if(typeof form.reportValidity === "function" && !form.reportValidity()){
      return;
    }

    const data = new FormData(form);
    const title = form.dataset.waForm || "Al-Kalsoom Medical Complex Inquiry";
    const lines = [`*${title}*`, "Al-Kalsoom Medical Complex", ""];

    for(const [key, value] of data.entries()){
      const cleanValue = String(value).trim();
      if(cleanValue) lines.push(`${pretty(key)}: ${cleanValue}`);
    }

    openWhatsApp(lines.join("\n"));
  });
}

function setupCards(){
  document.querySelectorAll("[data-service]").forEach(card => {
    card.addEventListener("click", () => openService(card.dataset.service));
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", event => {
      if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        openService(card.dataset.service);
      }
    });
  });

  document.querySelectorAll("[data-doctor]").forEach(card => {
    card.addEventListener("click", () => openDoctor(card.dataset.doctor));
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", event => {
      if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        openDoctor(card.dataset.doctor);
      }
    });
  });
}

function setupModal(){
  document.querySelectorAll(".modal .close").forEach(button => {
    button.addEventListener("click", closeModal);
  });

  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
      if(event.target === modal) closeModal();
    });
  });

  document.addEventListener("keydown", event => {
    if(event.key === "Escape") closeModal();
  });
}

function setActiveNav(){
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const target = link.getAttribute("href");
    link.classList.toggle("active", target === current || (current === "" && target === "index.html"));
  });
}

function pretty(value){
  return String(value)
    .replaceAll("_"," ")
    .replace(/\b\w/g, char => char.toUpperCase());
}

function openWhatsApp(message){
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  if(!newWindow){
    window.location.href = url;
  }

  showToast("WhatsApp message prepared. Review it and press Send.");
}

function showToast(text){
  const toast = document.querySelector(".toast");
  if(!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

function openService(key){
  const service = services[key];
  const modal = document.querySelector("#detailModal");
  const body = document.querySelector("#detailBody");
  if(!service || !modal || !body) return;

  body.innerHTML = `
    <div class="modal-grid">
      <div>
        <img src="${service.image}" alt="${escapeHtml(service.name)}">
      </div>
      <div>
        <span class="eyebrow">${service.icon} Medical Service</span>
        <h2 style="margin:15px 0 10px">${escapeHtml(service.name)}</h2>
        <p style="color:#64808c">${escapeHtml(service.desc)}</p>
        <div class="card" style="margin:20px 0;background:#f6fcfc">
          <strong>${escapeHtml(service.doctor)}</strong><br>
          <span style="color:#0b7285;font-weight:800">${escapeHtml(service.experience)} experience</span>
        </div>
        ${appointmentFields(`Book ${service.name}`)}
      </div>
    </div>`;

  bindWhatsAppForm(body.querySelector("form"));
  showModal(modal);
}

function openDoctor(key){
  const doctor = doctors[key];
  const modal = document.querySelector("#detailModal");
  const body = document.querySelector("#detailBody");
  if(!doctor || !modal || !body) return;

  body.innerHTML = `
    <div class="modal-grid">
      <div>
        <img src="${doctor.image}" alt="${escapeHtml(doctor.name)}">
      </div>
      <div>
        <span class="eyebrow">Our Specialist</span>
        <h2 style="margin:15px 0 8px">${escapeHtml(doctor.name)}</h2>
        <h3 style="font-size:1.05rem;color:#0b7285">${escapeHtml(doctor.position)}</h3>
        <p style="margin:12px 0;color:#64808c">${escapeHtml(doctor.desc)}</p>
        <p>
          <b>Qualification:</b> ${escapeHtml(doctor.qualification)}<br>
          <b>Experience:</b> ${escapeHtml(doctor.experience)}
        </p>
        ${appointmentFields(`Appointment Request — ${doctor.name}`)}
      </div>
    </div>`;

  bindWhatsAppForm(body.querySelector("form"));
  showModal(modal);
}

function appointmentFields(title){
  return `
    <form data-wa-form="${escapeAttribute(title)}" class="form-wrap" style="box-shadow:none;margin-top:20px">
      <div class="form-grid">
        <div class="field">
          <label for="modal-patient-name">Patient Name</label>
          <input id="modal-patient-name" name="patient_name" required>
        </div>
        <div class="field">
          <label for="modal-phone">Phone</label>
          <input id="modal-phone" name="phone" type="tel" required>
        </div>
        <div class="field">
          <label for="modal-date">Preferred Date</label>
          <input id="modal-date" type="date" name="date" required>
        </div>
        <div class="field">
          <label for="modal-time">Preferred Time</label>
          <input id="modal-time" type="time" name="time" required>
        </div>
        <div class="field full">
          <label for="modal-message">Message / Symptoms</label>
          <textarea id="modal-message" name="message" placeholder="Briefly tell us how we can help"></textarea>
        </div>
        <div class="field full">
          <button class="btn btn-primary" type="submit">Schedule Appointment →</button>
        </div>
      </div>
    </form>`;
}

function showModal(modal){
  modal.classList.add("show");
  document.body.classList.add("modal-open");
  const close = modal.querySelector(".close");
  if(close) close.focus();
}

function closeModal(){
  document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("show"));
  document.body.classList.remove("modal-open");
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[char]));
}

function escapeAttribute(value){
  return escapeHtml(value);
}
