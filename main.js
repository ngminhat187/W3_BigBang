// Open modal buy tickets
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

const showBuyTicketsModal = () => {
  modal.classList.add("open");
};

const hideBuyTicketsModal = () => {
  modal.classList.remove("open");
};

for (let buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTicketsModal);
}

modalClose.addEventListener("click", hideBuyTicketsModal);

modal.addEventListener("click", hideBuyTicketsModal);

modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
