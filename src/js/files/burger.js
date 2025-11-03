export default function burger() {
  const burgerOpens = document.querySelectorAll(".burger-open");
  const burgerClose = document.querySelector("#burger-close");
  const burger = document.querySelector("#burger");
  const burgerOverlay = document.querySelector("#burger-overlay");

  if (burger) {
    const headerHeight = document.querySelector(".header").clientHeight;
    burger.addEventListener("click", (e) => e.stopPropagation());

    burgerOverlay.addEventListener("click", handlerBurgerClose);

    burgerOpens.forEach((burgerOpen) => {
      burgerOpen.addEventListener("click", (e) => {
        e.stopPropagation();

        if (burgerOpen.classList.contains("_active")) {
          handlerBurgerClose();
        } else {
          handlerBurgerOpen();
        }
      });
    });
    burgerClose.addEventListener("click", (e) => {
      e.stopPropagation();
      handlerBurgerClose();
    });

    function handlerBurgerClose() {
      burgerOpens.forEach((b) => b.classList.remove("_active"));
      burger.classList.remove("_open");
      burgerOverlay.classList.remove("_active");
      document.body.classList.remove("body-hidden");
    }

    function handlerBurgerOpen() {
      burgerOpens.forEach((b) => b.classList.add("_active"));
      burger.classList.add("_open");
      burgerOverlay.classList.add("_active");
      document.body.classList.add("body-hidden");
    }

    function updateHeightBurger() {
      burger.style.maxHeight = `${window.visualViewport.height}px`;

      if (window.matchMedia("(max-width: 991px)").matches) {
        burger.style.top = `${headerHeight}px`;
      }
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }
}
