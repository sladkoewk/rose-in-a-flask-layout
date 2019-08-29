import Swiper from '../vendors/swiper';

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1020: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
