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

  const lodgeSlider = document.querySelector(".s-lodge__slider");

  if (lodgeSlider) {
    const swiper = new Swiper(lodgeSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: 1,
      navigation: {
        prevEl: ".s-lodge .slider-btn._prev",
        nextEl: ".s-lodge  .slider-btn._next",
      },
      pagination: {
        el: ".s-lodge .slider-pagination-shadow",
        clickable: true,
      },
    });
  }

  const stocksSlider = document.querySelector(".s-stocks__slider");

  if (stocksSlider) {
    const swiper = new Swiper(stocksSlider, {
      speed: 900,
      spaceBetween: 10,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".s-stocks .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        992: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    });
  }

  const eventSliders = document.querySelectorAll(".card-event__slider");

  if (eventSliders.length) {
    eventSliders.forEach((slider) => {
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

  const possibilitiesSlider = document.querySelector(
    ".s-possibilities__slider"
  );

  if (possibilitiesSlider) {
    const swiper = new Swiper(possibilitiesSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: 1,
      navigation: {
        prevEl: possibilitiesSlider.querySelector(".slider-btn._prev"),
        nextEl: possibilitiesSlider.querySelector(".slider-btn._next"),
      },
      pagination: {
        el: possibilitiesSlider.querySelector(".slider-pagination-shadow"),
        clickable: true,
      },
    });
  }

  const variantsSlider = document.querySelector(".s-variants__slider");

  if (variantsSlider) {
    const swiper = new Swiper(variantsSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-variants .slider-btn._prev",
        nextEl: ".s-variants .slider-btn._next",
      },
      pagination: {
        el: ".s-variants .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
      },
    });
  }
}
