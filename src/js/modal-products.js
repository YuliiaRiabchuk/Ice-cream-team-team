(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-products-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-close]'),
    modal: document.querySelector('[data-modal-products]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalProducts);
  refs.closeModalBtn.addEventListener('click', toggleModalProducts);

  function toggleModalProducts() {
    refs.modal.classList.toggle('is-products-hidden');
  }
})();
