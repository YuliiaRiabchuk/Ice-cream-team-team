(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-products-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-close]'),
    modal: document.querySelector('[data-modal-products]'),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalProducts)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalProducts);

  function toggleModalProducts() {
    refs.modal.classList.toggle('is-products-hidden');
  }
})();
