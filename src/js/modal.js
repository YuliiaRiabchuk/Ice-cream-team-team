(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
    audio: document.querySelector("audio"),
    button: document.querySelector("button.about-text__button")
  };
  console.log(refs)
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.body.addEventListener("click", backdropClose);
  refs.button.addEventListener("mousemove", sayMou);


  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function backdropClose(event) {
    const backdrop = document.querySelector("div.backdrop");
    if(event.target === backdrop) refs.modal.classList.toggle("is-hidden");
  }

  function sayMou(event) {
    console.log("EVENT", event)
    console.log("audio",refs.audio)
    refs.audio.play();
  }
})();
