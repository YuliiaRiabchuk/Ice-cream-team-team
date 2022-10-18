(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-header-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-close]'),
    modal: document.querySelector('[data-modal-header]'),
    body: document.querySelector("body"),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalHeader)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalHeader);
  refs.body.addEventListener("click", overlayClose);

  function toggleModalHeader() {
    refs.modal.classList.toggle('is-hidden');
  }
  function overlayClose(event) {
    const backdrop = document.querySelector("div.header-form__backdrop");
    if(event.target === backdrop) refs.modal.classList.toggle("is-hidden");
  }
})();
