import * as Utils from "../core/Utils";

export default class ModalWindow {
     #container;

     constructor() {
          this.#container = Utils.createElement(
               "div",
               "modal-overlay modal-overlay_hidden",
               "modal-window"
          );
     }

     render() {
          const modalWindowContaner = Utils.createElement(
               "div",
               "modal-container"
          );

          const divCloseModalButton = Utils.createElement(
               "div",
               "div-close-modal-button"
          );

          const closeModalButton = Utils.createElement(
               "i",
               "bi bi-x-circle",
               "close-button"
          );

          const divImageModal = Utils.createElement("div", "div-delete-modal");

          const imageModal = Utils.createElement("img", "image-modal");

          modalWindowContaner.append(divCloseModalButton);
          modalWindowContaner.append(divImageModal);
          divCloseModalButton.append(closeModalButton);
          divImageModal.append(imageModal);
          this.#container.append(modalWindowContaner);

          return this.#container;
     }

     showModal(imageUrl) {
          const imageModal = document.querySelector(".image-modal");
          imageModal.src = imageUrl;

          this.#container.addEventListener("click", (event) => {
               const { target } = event;
               if (
                    target.id === "modal-window" ||
                    target.id === "close-button"
               ) {
                    imageModal.src = "";
                    this.#container.classList.add("modal-overlay_hidden");
               }
          });
     }
}
