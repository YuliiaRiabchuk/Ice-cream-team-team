!function(){var e,t={iceCreamBtn:document.querySelector("[data-modal-ice-cream-open]"),iceCoffeeBtn:document.querySelector("[data-modal-ice-coffee-open]"),milkshakeBtn:document.querySelector("[data-modal-milkshake-open]"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]")};function o(o){e=o,t.modal.classList.toggle(o),c()}function c(){t.modal.classList.toggle("is-products-hidden")}t.iceCreamBtn.addEventListener("click",(function(){o("iceCreamModalStyle")})),t.iceCoffeeBtn.addEventListener("click",(function(){o("iceCoffeeModalStyle")})),t.milkshakeBtn.addEventListener("click",(function(){o("milkshakeModalStyle")})),t.closeModalBtn.addEventListener("click",(function(){t.modal.classList.toggle(e),c()}))}();
//# sourceMappingURL=index.980124fb.js.map