// ضع رقم واتساب الحقيقي بصيغة دولية بدون + أو مسافات، مثال: 9665XXXXXXXX
const WHATSAPP_NUMBER = "966570838853";
const message = "مرحباً، أريد الاستفسار عن تنسيق وتصميم حديقتي.";
const waLinks = ["waTop","waHero","waBottom"];
waLinks.forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  if (WHATSAPP_NUMBER !== "PUT_YOUR_NUMBER_HERE") {
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  } else {
    el.href = "#contact";
    el.addEventListener("click", e => {
      e.preventDefault();
      alert("أضف رقم واتساب الحقيقي داخل ملف script.js مكان PUT_YOUR_NUMBER_HERE ثم ارفع الموقع.");
    });
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
const nav = document.querySelector(".nav");
document.querySelector(".menu-btn").addEventListener("click",()=>nav.classList.toggle("mobile-open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("mobile-open")));
