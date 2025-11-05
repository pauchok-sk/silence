export default function sliders() {
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 900,
      effect: "fade",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".intro .slider-btn-m._prev",
        nextEl: ".intro .slider-btn-m._next",
      },
      pagination: {
        el: ".intro__slider-pagination",
        clickable: true,
      },
    });
  }

  const lodgesSlider = document.querySelector(".s-lodges__slider");

  if (lodgesSlider && window.matchMedia("(max-width: 1199px)").matches) {
    const swiper = new Swiper(lodgesSlider, {
      speed: 900,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      pagination: {},
      on: {
        touchStart: function (swiper, event) {
          // Проверяем, является ли цель дочерним слайдером или его элементом
          const isProductSlider = event.target.closest(".card-lodge__slider");
          if (isProductSlider) {
            swiper.allowTouchMove = false;
          }
        },
        touchEnd: function (swiper) {
          swiper.allowTouchMove = true;
        },
      },
    });
  }

  const lodgeSliders = document.querySelectorAll(".card-lodge__slider");

  if (lodgeSliders.length) {
    lodgeSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 15,
        slidesPerView: 1,
        navigation: {
          prevEl: slider.querySelector(".slider-btn._prev"),
          nextEl: slider.querySelector(".slider-btn._next"),
        },
        pagination: {
          el: slider.querySelector(".slider-pagination-shadow"),
          clickable: true,
        },
      });
    });
  }
}
