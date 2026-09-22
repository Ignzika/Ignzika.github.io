/* ══════════════════════════════════════════════════════════════
   PORTAFOLIO — Ignacio Bustos Soto
   main.js · Lógica de UI
   ──────────────────────────────────────────────────────────────
   Requiere: js/i18n.js cargado antes que este archivo.
   Las traducciones viven en window.translations (i18n.js).
   ══════════════════════════════════════════════════════════════ */

"use strict";

/* ─── Estado de idioma ───────────────────────────────────────── */
let currentLang = localStorage.getItem("portfolio-lang") || "es";

/* ─── Aplicar idioma ─────────────────────────────────────────── */
function setLanguage(lang) {
  const dict = window.translations[lang];
  if (!dict) return; // idioma no registrado, no hace nada

  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  document.documentElement.lang = lang;

  // Actualizar todos los nodos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Indicador visual del toggle
  const langES = document.getElementById("langES");
  const langEN = document.getElementById("langEN");
  if (langES && langEN) {
    langES.classList.toggle("active", lang === "es");
    langEN.classList.toggle("active", lang === "en");
  }
}

/* ─── Toggle de idioma ───────────────────────────────────────── */
function initLangToggle() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
  });

  // Aplicar idioma guardado (o por defecto) al cargar
  setLanguage(currentLang);
}

/* ─── Navbar: scroll effect + active link ───────────────────── */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  // Throttle via requestAnimationFrame — evita cálculos en cada frame de scroll
  let scrollPending = false;
  const onScroll = () => {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
      highlightActiveSection();
      scrollPending = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // Cachear secciones y links una sola vez al init
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navLinks = Array.from(
    document.querySelectorAll('.nav-links a[href^="#"]'),
  );

  // Mapa id → link: evita querySelector por sección en cada evento scroll
  const navLinkMap = navLinks.reduce((map, link) => {
    map[link.getAttribute("href").slice(1)] = link;
    return map;
  }, {});

  function highlightActiveSection() {
    const scrollY = window.scrollY + 80;
    sections.forEach((section) => {
      const link = navLinkMap[section.getAttribute("id")];
      if (link) {
        link.classList.toggle(
          "active",
          scrollY >= section.offsetTop &&
            scrollY < section.offsetTop + section.offsetHeight,
        );
      }
    });
  }

  // Cerrar mobile menu al navegar desde el navbar desktop
  navLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
}

/* ─── Burger menu ────────────────────────────────────────────── */
// Referencias cacheadas al init — no se buscan de nuevo en cada click
let _burger = null;
let _mobileMenu = null;

function initBurger() {
  _burger = document.getElementById("burger");
  _mobileMenu = document.getElementById("nav-links-mobile");
  if (!_burger || !_mobileMenu) return;

  _burger.addEventListener("click", () => {
    _mobileMenu.classList.contains("open")
      ? closeMobileMenu()
      : openMobileMenu();
  });

  // Cerrar al hacer click fuera del menú cuando está abierto
  document.addEventListener("click", (e) => {
    if (
      _mobileMenu.classList.contains("open") &&
      !_burger.contains(e.target) &&
      !_mobileMenu.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Cerrar al hacer click en cualquier link del menú mobile
  _mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function openMobileMenu() {
  _burger.classList.add("open");
  _burger.setAttribute("aria-expanded", "true");
  _mobileMenu.classList.add("open");
  _mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  if (!_burger || !_mobileMenu) return;
  _burger.classList.remove("open");
  _burger.setAttribute("aria-expanded", "false");
  _mobileMenu.classList.remove("open");
  _mobileMenu.setAttribute("aria-hidden", "true");
}

/* ─── Animaciones de scroll (fade-in) ───────────────────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    ".section, .timeline-content, .edu-card, .skill-group, .project-card, " +
      ".contact-card, .cert-badge, .about-grid, .about-stats .stat",
  );

  // Fallback para navegadores sin IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("fade-in", "visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        // Limpiar transitionDelay inline una vez completada la animación
        // para no interferir con transiciones futuras del elemento
        entry.target.addEventListener(
          "transitionend",
          () => {
            entry.target.style.transitionDelay = "";
          },
          { once: true },
        );
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(i % 6) * 80}ms`; // delay escalonado por grupos de 6
    observer.observe(el);
  });
}

/* ─── Hero: visible al cargar ────────────────────────────────── */
function initHeroAnimation() {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    setTimeout(() => heroContent.classList.add("visible"), 100);
  }
}

/* ─── Año dinámico en el footer ──────────────────────────────── */
function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ─── Init ───────────────────────────────────────────────────── */
// Nota: smooth scroll está manejado por CSS (scroll-behavior: smooth en html {})
document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initNavbar();
  initBurger();
  initScrollAnimations();
  initHeroAnimation();
  initFooterYear();
});
