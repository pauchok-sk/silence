export default function brone() {
  const buttons = document.querySelectorAll("[href='#modal-brone']");

  if (buttons.length) {
    const input = document.querySelector("#input-brone");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        input.value = "";

        if (name) {
          input.value = name;
        }
      })
    })
  }
}