(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-header-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-close]'),
    modal: document.querySelector('[data-modal-header]'),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalHeader)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalHeader);

  function toggleModalHeader() {
    refs.modal.classList.toggle('is-header-hidden');
  }
})();
