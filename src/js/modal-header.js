(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-header-open]'),
    openModalBtn: document.querySelector('[data-modal-header-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-close]'),
    modal: document.querySelector('[data-modal-header]'),
  };
 
  
  refs.openModalBtns.forEach(element =>
    element.addEventListener('click', toggleModalHeader)
  );
  refs.closeModalBtn.addEventListener('click', toggleModalHeader);

   
  function toggleModalHeader(event) {
    console.log('click')
    const isMenuOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle('is-header-hidden');
    bodyScrollLock[scrollLockMethod](document.body);
    
  }
})();
