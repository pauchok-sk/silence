export default function formBarScroll() {
  const formBar = document.querySelector(".form-bar");

  if (formBar) {
    let lastScrollTop = 0;
    window.addEventListener("scroll", (e) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        formBar.classList.add("_hide");
      } else {
        formBar.classList.remove("_hide");
      }

      lastScrollTop = scrollTop;
    });
  }
}
