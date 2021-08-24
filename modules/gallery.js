import * as Utils from "../core/Utils";

export default class Gallery {
     #container;

     constructor(showModal) {
          this.#container = Utils.createElement("div", "gallery-container");
          this.showModal = showModal;
     }

     renderImagesContainer() {
          const allImagesContainer = Utils.createElement(
               "div",
               "row row-cols-1 row-cols-md-5 g-5",
               "all-images-container"
          );

          allImagesContainer.addEventListener("click", (event) => {
               const { target } = event;
               const image = target.closest("#image");

               if (image) {
                    const modalOverlayWindow =
                         document.querySelector("#modal-window");
                    modalOverlayWindow.classList.remove("modal-overlay_hidden");
                    this.showModal(image.dataset.fullSizeImg);
               }
          });

          this.#container.append(allImagesContainer);

          return this.#container;
     }

     renderGallery(arrOfImages) {
          const allImagesContainer = document.querySelector(
               "#all-images-container"
          );

          for (const item of arrOfImages) {
               const itemOfGallery = this.createCard(item);
               allImagesContainer.append(itemOfGallery);
          }
     }

     createCard(item) {
          const itemContainer = Utils.createElement("div", "item-container");

          const imgContainer = Utils.createElement("div", "img-container");

          const imgFooterContainer = Utils.createElement(
               "div",
               "img-footer-container"
          );

          const imageItem = Utils.createElement("img", "image");
          imageItem.src = item.webformatURL;
          imageItem.dataset.fullSizeImg = item.largeImageURL;
          imageItem.title = item.tags;

          const imageAttributes = Utils.createElement(
               "ul",
               "list-group list-group-horizontal"
          );

          const imageLikes = Utils.createElement(
               "li",
               "list-group-item",
               "image-attributes"
          );
          imageLikes.innerHTML = `<i class="bi bi-heart"> ${item.likes}</i>`;

          const imageComments = Utils.createElement(
               "li",
               "list-group-item",
               "image-attributes"
          );
          imageComments.innerHTML = `<i class="bi bi-card-text"> ${item.comments}</i>`;

          const imageViews = Utils.createElement(
               "li",
               "list-group-item",
               "image-attributes"
          );
          imageViews.innerHTML = `<i class="bi bi-eye"> ${item.views}</i>`;

          const imageDownloads = Utils.createElement(
               "li",
               "list-group-item",
               "image-attributes"
          );
          imageDownloads.innerHTML = `<i class="bi bi-cloud-arrow-down"> ${item.downloads}</i>`;

          itemContainer.append(imgContainer, imgFooterContainer);
          imgContainer.append(imageItem);
          imageAttributes.append(
               imageLikes,
               imageComments,
               imageViews,
               imageDownloads
          );
          imgFooterContainer.append(imageAttributes);

          return itemContainer;
     }
}
