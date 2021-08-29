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

          const spanNoMorePictures = Utils.createElement(
               "span",
               "no-more-pictures"
          );
          spanNoMorePictures.innerHTML = "there are no more pictures... :(";
          spanNoMorePictures.classList.add("hidden");

          window.addEventListener("scroll", () => {
               let windowRelativeBottom =
                    document.documentElement.getBoundingClientRect().bottom;

               if (
                    windowRelativeBottom <
                    document.documentElement.clientHeight + 10
               ) {
                    const infiniteScroll = async () => {
                         try {
                              const response = await this.loadMoreImages();
                              console.log(response);
                              if (!response.ok) {
                                   throw new Error("Ошибка получения данных");
                              }
                              let result = await response.json();
                              result = await [...result.hits];
                              this.renderMoreGallery(result);
                         } catch (error) {
                              // console.log("error:", error);
                              if (loadMoreButton) {
                                   loadMoreButton.remove();
                              }
                              spanNoMorePictures.classList.remove("hidden");
                         }
                    };
                    infiniteScroll();
               }
          });

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
                                   top: document.body.scrollHeight + 300,
                                   behavior: "smooth",
                              });
                         }, 200);
                    }
               };
               getMoreImages();
               loadMoreButton.remove();
          });

          divLoadMoreButton.append(loadMoreButton);
          divLoadMoreButton.append(spanNoMorePictures);
          this.#container.append(divLoadMoreButton);

          return this.#container;
     }
}
