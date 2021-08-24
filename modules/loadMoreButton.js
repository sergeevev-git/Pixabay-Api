import * as Utils from "../core/Utils";

export default class LoadMoreButton {
     #container;

     constructor(loadMoreImages, renderMoreGallery) {
          this.#container = Utils.createElement(
               "div",
               "load-more-button-container"
          );
          this.loadMoreImages = loadMoreImages;
          this.renderMoreGallery = renderMoreGallery;
     }

     render() {
          const divLoadMoreButton = Utils.createElement(
               "div",
               "col-auto",
               "div-load-more-button"
          );

          const loadMoreButton = Utils.createElement(
               "button",
               "btn btn-outline-success btn-lg",
               "load-more-button"
          );
          loadMoreButton.type = "submit";
          loadMoreButton.textContent = "more...";

          loadMoreButton.addEventListener("click", () => {
               const getMoreImages = async () => {
                    try {
                         const response = await this.loadMoreImages();
                         if (!response.ok) {
                              throw new Error("Ошибка получения данных");
                         }
                         let result = await response.json();
                         result = await [...result.hits];
                         this.renderMoreGallery(result);
                    } catch (error) {
                         console.log("error:", error);
                    } finally {
                         setTimeout(() => {
                              window.scrollTo({
                                   top: document.body.scrollHeight,
                                   behavior: "smooth",
                              });
                         }, 200);
                    }
               };

               getMoreImages();
          });

          divLoadMoreButton.append(loadMoreButton);
          this.#container.append(divLoadMoreButton);

          return this.#container;
     }
}
