var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1.8,
  // slidesperGroup: 1,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // 내비게이션 좌우 이동 버튼
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320 : {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768 : {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1280 : {
      slidesPerView: 1.05,
      slidesperGroup: 2,
      spaceBetween: 20,
    },
    1440 : {
      slidesPerView: 1.2,
      slidesperGroup: 1,
      spaceBetween: 20,
    },
    1920 : {
      slidesPerView: 1.2,
      slidesperGroup: 3,
      spaceBetween: 40,
    }
  }
});
