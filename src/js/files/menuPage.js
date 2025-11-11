export default function menuPage() {
  const sidebar = document.querySelector("#menu-page-sidebar");

  if (sidebar) {
    const btnOpen = document.querySelector("#menu-page-open");
    const btnClose = document.querySelector("#menu-page-close");
    const overlay = document.querySelector("#menu-page-overlay");

    overlay.addEventListener("click", handleClose)
    btnClose.addEventListener("click", handleClose)
    btnOpen.addEventListener("click", handleOpen)

    function handleOpen() {
      overlay.classList.add("_active");
      sidebar.classList.add("_open");
      document.body.classList.add("body-hidden");
    }
    function handleClose() {
      overlay.classList.remove("_active");
      sidebar.classList.remove("_open");
      document.body.classList.remove("body-hidden");
    }
  }
}
