/*
  gallery.js — Swiper + GLightbox helpers
*/

(function () {
  'use strict';

  function initSwiper() {
    const el = document.querySelector('.mySwiper');
    if (!el || !window.Swiper) return;

    // If reduced motion, disable autoplay
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // eslint-disable-next-line no-new
    new window.Swiper(el, {
      loop: true,
      spaceBetween: 14,
      centeredSlides: false,
      slidesPerView: 1,
      grabCursor: true,
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
      autoplay: reduceMotion ? false : { delay: 4500, disableOnInteraction: false },
    });
  }

  document.addEventListener('DOMContentLoaded', initSwiper);
})();

