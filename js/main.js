/*
  main.js — common behaviors
*/

(function () {
  'use strict';

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // AOS init
  function initAOS() {
    if (window.AOS && typeof window.AOS.init === 'function') {
      window.AOS.init({
        duration: 700,
        once: true,
        offset: 80,
        disable: function () {
          return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },
      });
    }
  }

  // GLightbox init (only if present)
  function initLightbox() {
    if (window.GLightbox && typeof window.GLightbox === 'function') {
      window.GLightbox({
        selector: '.glightbox',
      });
    }
  }

  // Smooth focus on hash navigation
  function handleHashNavigation() {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.setAttribute('tabindex', '-1');
  }

  // Run after DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initLightbox();
    handleHashNavigation();
  });
})();

