export default function select() {
  const selects = document.querySelectorAll(".select");

  if (selects.length) {
    document.body.addEventListener("click", () => {
      const selectsOpen = document.querySelectorAll(".select._open");

      if (selectsOpen.length) {
        selectsOpen.forEach((s) => s.classList.remove("_open"));
      }
    });

    selects.forEach((select) => {
      const btn = select.querySelector(".select-btn");
      const input = select.querySelector(".input");
      const items = select.querySelectorAll(".select-item");

      select.addEventListener("click", (e) => e.stopPropagation());

      items.forEach((item) => {
        item.addEventListener("click", () => {
          items.forEach((i) => i.classList.remove("_active"));
          item.classList.add("_active");

          input.value = item.textContent;

          handleClose();
        });
      });

      btn.addEventListener("click", () => {
        if (select.classList.contains("_open")) {
          handleClose();
        } else {
          handleOpen();
        }
      });

      function handleOpen() {
        select.classList.add("_open");
      }
      function handleClose() {
        select.classList.remove("_open");
      }
    });
  }
}
