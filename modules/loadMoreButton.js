import * as Utils from "../core/Utils";

export default class LoadMoreButton {
     #container;

     constructor(loadMoreImages, renderMoreGallery) {
          // this.#container = document.createElement("div");
          // this.#container.className = "load-more-button-container";
          this.#container = Utils.createElement(
               "div",
               "load-more-button-container"
          );
          this.loadMoreImages = loadMoreImages;
          this.renderMoreGallery = renderMoreGallery;
     }

     render() {
          // const divLoadMoreButton = document.createElement("div");
          // divLoadMoreButton.className = "col-auto";
          // divLoadMoreButton.id = "div-load-more-button";
          const divLoadMoreButton = Utils.createElement(
               "div",
               "col-auto",
               "div-load-more-button"
          );

          // const loadMoreButton = document.createElement("button");
          // loadMoreButton.className = "btn btn-outline-success btn-lg";
          // loadMoreButton.id = "load-more-button";
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
                         // console.log(response)
                         if (!response.ok) {
                              throw new Error("Ошибка получения данных");
                         }
                         let result = await response.json();
                         result = await [...result.hits];
                         // console.log('in load more', result)
                         this.renderMoreGallery(result);

                         // const response = await this.loadMoreImages()
                         // response
                         //      .then((articles) => articles.json())
                         //      .then((articles) => {
                         //           this.createListItems.render(articles.hits)
                         //           console.log(articles.hits)
                         //      })
                         //      .then(() => {
                         //      window.scrollTo({
                         //           top: document.body.scrollHeight,
                         //           behavior: "smooth",
                         //      });
                    } catch (error) {
                         console.log("error:", error);
                    } finally {
                    }
               };

               getMoreImages();
          });

          divLoadMoreButton.append(loadMoreButton);
          this.#container.append(divLoadMoreButton);

          return this.#container;
     }
}
