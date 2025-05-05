let loverboySwiper;

function initLoverboySwiper() {
  if (loverboySwiper) loverboySwiper.destroy(true, true);

  loverboySwiper = new Swiper(".loverboy-swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 5000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLoverboySwiper();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initLoverboySwiper();
  }, 300);
});
