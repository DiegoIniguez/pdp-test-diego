document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.image-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: '.imageSwiper__arrow--next',
      prevEl: '.imageSwiper__arrow--prev',
    },
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    }
  });
});