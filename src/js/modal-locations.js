(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-locations-open]'),
    closeModalBtn: document.querySelector('[data-modal-locations-close]'),
    modal: document.querySelector('[data-modal-locations]'),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalLocations)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalLocations);

  function toggleModalLocations() {
    refs.modal.classList.toggle('is-locations-hidden');
  }
})();
