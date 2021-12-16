export const swiperSettings = {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 1.7,
    },
    1440: {
      slidesPerView: 2,
    },
  },
};
