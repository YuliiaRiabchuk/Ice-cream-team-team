(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.body.addEventListener("click", backdropClose);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function backdropClose(event) {
    const backdrop = document.querySelector("div.backdrop");
    if(event.target === backdrop) refs.modal.classList.toggle("is-hidden");
  }
})();
