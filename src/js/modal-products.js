(() => {
  const refs = {
    // openModalBtns: document.querySelectorAll('[data-modal-products-open]'),
    iceCreamBtn: document.querySelector('[data-modal-ice-cream-open]'),
    iceCoffeeBtn: document.querySelector('[data-modal-ice-coffee-open]'),
    milkshakeBtn: document.querySelector('[data-modal-milkshake-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-close]'),
    modal: document.querySelector('[data-modal-products]'),
  };

  var currentModalStyle;

  refs.iceCreamBtn.addEventListener('click', function () {
    processModalProducts('iceCreamModalStyle');
  });

  refs.iceCoffeeBtn.addEventListener('click', function () {
    processModalProducts('iceCoffeeModalStyle');
  });
  refs.milkshakeBtn.addEventListener('click', function () {
    processModalProducts('milkshakeModalStyle');
  });

  refs.closeModalBtn.addEventListener('click', closeModal);

  function processModalProducts(modalStyle) {
    currentModalStyle = modalStyle;
    refs.modal.classList.toggle(modalStyle);
    toggleModalProducts();
  }

  function toggleModalProducts() {
    refs.modal.classList.toggle('is-products-hidden');
  }

  function closeModal() {
    refs.modal.classList.toggle(currentModalStyle);
    toggleModalProducts();
  }
})();
