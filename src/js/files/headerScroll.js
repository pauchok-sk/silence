export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const firstSection = document.querySelector("section");

      if (scrollTop > header.clientHeight) {
        header.classList.add("_shadow");
      } else {
        header.classList.remove("_shadow");
      }

      if (header.classList.contains("header-main")) {
        // если скроллим вверх и проскролили больше половины высоты первой секции, то открываем, иначе скрываем
        if (scrollTop < lastScrollTop && scrollTop > firstSection.clientHeight / 2) {
          header.classList.remove("_hide");
        } else {
          header.classList.add("_hide");
        }
      } else {
        // если проскролили больше высоты шапки и проскролили вниз, то скрываем шапку, иначе открываем
        if (scrollTop > header.clientHeight && scrollTop > lastScrollTop) {
          header.classList.add("_hide");
        } else {
          header.classList.remove("_hide");
        }
      }

      lastScrollTop = scrollTop;
    });
  }
}
