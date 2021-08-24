import SearchForm from "./searchForm";
import Gallery from "./gallery";
import Request from "./request";
import LoadMoreButton from "./loadMoreButton";
import ModalWindow from "./modalWindow";
import ToTopButton from "./toTopButton";
import * as Utils from "../core/Utils";

export default class App {
     #mainContainer;

     constructor() {
          this.#mainContainer = Utils.createElement("div", "container");

          this.searchForm = new SearchForm(
               this.createNewrequest.bind(this),
               this.renderGallery.bind(this)
          );
          this.gallery = new Gallery(this.showModal.bind(this));
          this.request = new Request();
          this.loadMoreButton = new LoadMoreButton(
               this.loadMoreImages.bind(this),
               this.renderMoreGallery.bind(this)
          );
          this.modalWindow = new ModalWindow();
          this.toTopButton = new ToTopButton();
     }

     run() {
          document.body.append(this.#mainContainer);
          this.#mainContainer.append(this.toTopButton.render());
          this.#mainContainer.append(this.searchForm.render());
          this.#mainContainer.append(this.modalWindow.render());
     }

     createNewrequest(request) {
          this.request.resetPage();
          this.request.setRequest(request);
          return this.request.sendRequest();
     }

     renderGallery(arrOfImage) {
          this.#mainContainer.append(this.gallery.renderImagesContainer());
          this.gallery.renderGallery(arrOfImage);
          this.#mainContainer.append(this.loadMoreButton.render());
     }

     loadMoreImages() {
          return this.request.sendRequest();
     }

     renderMoreGallery(arrOfImage) {
          this.gallery.renderGallery(arrOfImage);
     }

     showModal(ulrImage) {
          this.modalWindow.showModal(ulrImage);
     }
}
