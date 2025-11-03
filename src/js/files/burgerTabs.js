export default function burgerTabs() {
  const buttons = document.querySelectorAll("[data-burger-tab-btn]");

  if (buttons.length) {
    const arrTabs = document.querySelectorAll("[data-burger-tab]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const currentTab = document.querySelector(
          `[data-burger-tab="${btn.dataset.burgerTabBtn}"]`
        );
  
        arrTabs.forEach((t) => t.classList.remove("_active", "_show"));
  
        currentTab.classList.add("_active");
        setTimeout(() => {
          currentTab.classList.add("_show");
        }, 150);
      })
    });
  }
}
