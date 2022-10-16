(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-location-open]'),
    closeModalBtn: document.querySelector('[data-modal-location-close]'),
    modal: document.querySelector('[data-modal-location]'),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalLocation)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalLocation);

  function toggleModalLocation() {
    refs.modal.classList.toggle('is-location-hidden');
  }
})();
