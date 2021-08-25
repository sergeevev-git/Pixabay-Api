import * as Utils from "../core/Utils";

export default class SearchForm {
     #container;

     constructor(createNewrequest, renderGallery) {
          this.#container = Utils.createElement("div", "search-form-container");
          this.createNewrequest = createNewrequest;
          this.renderGallery = renderGallery;
     }

     render() {
          const divSearchForm = Utils.createElement("div", "div-search-form");

          const searchForm = Utils.createElement("form", "row", "search-form");

          const divInput = Utils.createElement("div", "col-auto");

          const searchFormInput = Utils.createElement(
               "input",
               "form-control",
               "form-input"
          );
          searchFormInput.type = "text";
          searchFormInput.placeholder = "Search images...";

          const divButton = Utils.createElement("div", "col-auto");

          const submitFormButton = Utils.createElement(
               "button",
               "btn btn-outline-success"
          );
          submitFormButton.type = "submit";
          submitFormButton.textContent = "Search";

          searchForm.addEventListener("submit", (event) => {
               event.preventDefault();

               const allImagesContainer = document.querySelector(
                    "#all-images-container"
               );
               const divLoadMoreButton = document.querySelector(
                    "#div-load-more-button"
               );

               if (allImagesContainer && divLoadMoreButton) {
                    allImagesContainer.remove();
                    divLoadMoreButton.remove();
               }

               const getImages = async () => {
                    try {
                         const response = await this.createNewrequest(
                              searchFormInput.value
                         );

                         if (!response.ok) {
                              throw new Error("Ошибка получения данных");
                         }
                         let result = await response.json();
                         result = await [...result.hits];
                         console.log("in request", result);
                         this.renderGallery(result);
                    } catch (error) {
                         console.log("error:", error);
                    } finally {
                    }
               };

               getImages();

               searchFormInput.value = "";
          });

          divInput.append(searchFormInput);
          divButton.append(submitFormButton);
          searchForm.append(divInput, divButton);
          divSearchForm.append(searchForm);
          this.#container.append(divSearchForm);

          return this.#container;
     }
}
