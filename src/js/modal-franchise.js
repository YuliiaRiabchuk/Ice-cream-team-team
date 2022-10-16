(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-franchise-open]'),
    closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
    modal: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalFranchise)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalFranchise);

  function toggleModalFranchise() {
    refs.modal.classList.toggle('is-franchise-hidden');
  }
})();
