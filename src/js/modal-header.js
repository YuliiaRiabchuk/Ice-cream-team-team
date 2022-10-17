(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-header-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-close]'),
    modal: document.querySelector('[data-modal-header]'),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalByNow)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalByNow);

  function toggleModalProducts() {
    refs.modal.classList.toggle('is-products-hidden');
  }
})();
