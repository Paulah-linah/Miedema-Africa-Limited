/* Miedema Africa Limited — small, dependency-free behaviour */
(function () {
  "use strict";
  var root = document.documentElement;
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  // Mobile menu
  function setNav(open) {
    root.classList.toggle("nav-open", open);
    if (toggle) { toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu"); }
  }
  if (toggle) toggle.addEventListener("click", function () { setNav(!root.classList.contains("nav-open")); });
  if (nav) nav.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  // Header shadow on scroll
  function onScroll() { if (header) header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Hero video: start only after the page has loaded, and skip it for data-saver / reduced motion
  var video = document.querySelector("video[data-src]");
  if (video) {
    var conn = navigator.connection || {};
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!conn.saveData && !reduce && !/(^|-)2g$/.test(conn.effectiveType || "")) {
      window.addEventListener("load", function () {
        video.src = video.getAttribute("data-src");
        video.addEventListener("playing", function () { video.style.opacity = "1"; }, { once: true });
        var p = video.play(); if (p && p.catch) p.catch(function () {});
      });
    }
  }

  // Lightbox for project photos
  var box = document.getElementById("lightbox");
  if (box && box.showModal) {
    var boxImg = box.querySelector("img"), boxCap = box.querySelector("p");
    document.querySelectorAll("[data-full]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        boxImg.src = btn.getAttribute("data-full");
        boxImg.alt = btn.getAttribute("data-caption") || "";
        boxCap.textContent = btn.getAttribute("data-caption") || "";
        box.showModal();
      });
    });
    box.addEventListener("click", function (e) { if (e.target === box || e.target.closest(".close")) box.close(); });
  }

  // Google Map loads only when asked (saves ~1 MB on the contact page)
  var mapBtn = document.querySelector("[data-map]");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = mapBtn.getAttribute("data-map");
      f.title = "Map showing Miedema Africa Limited in Kahawa Sukari, Nairobi";
      f.loading = "lazy";
      f.referrerPolicy = "no-referrer-when-downgrade";
      f.allowFullscreen = true;
      mapBtn.closest(".map").appendChild(f);
      mapBtn.closest(".map-load").remove();
    });
  }

  // Quote form: no server needed — opens WhatsApp or email with the details filled in
  var form = document.querySelector(".js-quote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var text = "Hello Miedema Africa, I'd like a quote.\n\n" +
        "Name: " + d.get("name") + "\n" +
        "Phone: " + d.get("phone") + "\n" +
        (d.get("email") ? "Email: " + d.get("email") + "\n" : "") +
        "Service: " + d.get("service") + "\n" +
        (d.get("location") ? "Project location: " + d.get("location") + "\n" : "") +
        "\n" + d.get("message");
      var via = e.submitter && e.submitter.value === "email" ? "email" : "whatsapp";
      if (via === "email") {
        window.location.href = "mailto:" + form.getAttribute("data-email") + "?subject=" + encodeURIComponent("Quote request — " + d.get("service")) + "&body=" + encodeURIComponent(text);
      } else {
        window.open("https://wa.me/" + form.getAttribute("data-wa") + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      }
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
