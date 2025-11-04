export default function sliders() {
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 900,
      effect: "fade",
      autoplay: {
        delay: 3500
      },
      navigation: {
        prevEl: ".intro .slider-btn-m._prev",
        nextEl: ".intro .slider-btn-m._next"
      },
      pagination: {
        el: ".intro__slider-pagination",
        clickable: true
      }
    })
  }
}