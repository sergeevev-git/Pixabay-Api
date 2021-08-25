
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
     'use strict';

     var e = [],
         t = [];

     function n(n, r) {
       if (n && "undefined" != typeof document) {
         var a,
             s = !0 === r.prepend ? "prepend" : "append",
             d = !0 === r.singleTag,
             i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

         if (d) {
           var u = e.indexOf(i);
           -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
         } else a = c();

         65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
       }

       function c() {
         var e = document.createElement("style");
         if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
         var a = "prepend" === s ? "afterbegin" : "beforeend";
         return i.insertAdjacentElement(a, e), e;
       }
     }

     var css = ":root {\r\n     --modal-overlay: rgb(84, 103, 145, 0.6);\r\n}\r\n\r\nbody {\r\n     background: rgb(221, 229, 230);\r\n     margin: 30px 0;\r\n     padding: 0;\r\n}\r\n/*\r\n.main-container {\r\n     display: flex;\r\n     flex-direction: column;\r\n     justify-content: flex-start;\r\n     align-items: center;\r\n     margin: 0 auto;\r\n     padding: 0 10% 0 10%;\r\n\r\n}\r\n*/\r\n.search-form-container {\r\n     display: flex;\r\n     justify-content: center;\r\n}\r\n\r\n#div-search-form {\r\n     padding: 10px 15px 10px 15px;\r\n     border-radius: 15px;\r\n     box-shadow: 5px -5px 10px rgb(174, 193, 196),\r\n          -5px 5px 10px rgb(250, 250, 250);\r\n}\r\n\r\n#form-input {\r\n     background-color: #f1fafc;\r\n}\r\n/*\r\n.gallery-container {\r\n     margin: 20px 0 20px 0;\r\n     max-width: 90vw;\r\n}\r\n*/\r\n#all-images-container {\r\n     margin: 30px 0 30px 0;\r\n     padding: 15px 15px 20px 15px;\r\n     border-radius: 25px;\r\n     background-color: rgb(206, 219, 221);\r\n     box-shadow: 10px -10px 20px rgb(174, 193, 196),\r\n          -10px 10px 20px rgb(250, 250, 250);\r\n}\r\n\r\n#item-container {\r\n     display: flex;\r\n     flex-direction: column;\r\n     justify-content: center;\r\n     margin-top: 10px;\r\n     padding-left: 5px;\r\n     padding-right: 5px;\r\n}\r\n\r\n#img-container {\r\n     display: flex;\r\n     justify-self: center;\r\n}\r\n\r\n#img-container img {\r\n     cursor: pointer;\r\n     width: 100%;\r\n     height: auto;\r\n     border-radius: 5px 5px 0 0;\r\n     border: thin double #dde5e6;\r\n}\r\n\r\n.img-footer-container {\r\n     font-size: 11px;\r\n     background-color: #bbc8ca;\r\n     border-radius: 0 0 5px 5px;\r\n     border: thin double #dde5e6;\r\n     border-width: 0px 1px 1px 1px;\r\n     justify-self: flex-end;\r\n}\r\n\r\n#image-attributes {\r\n     display: flex;\r\n     flex-direction: row;\r\n     flex-wrap: wrap;\r\n     justify-content: flex-start;\r\n     align-items: center;\r\n     margin: 0 auto;\r\n     padding: 3px;\r\n     background: none;\r\n     border: none;\r\n}\r\n\r\n.load-more-button-container {\r\n     margin-bottom: 300px;\r\n}\r\n\r\n#div-load-more-button {\r\n     display: flex;\r\n     justify-content: center;\r\n}\r\n\r\n#load-more-button {\r\n     box-shadow: 5px -5px 10px rgb(174, 193, 196),\r\n          -5px 5px 10px rgb(250, 250, 250);\r\n}\r\n\r\n#load-more-button {\r\n}\r\n\r\n.hidden {\r\n     visibility: hidden;\r\n}\r\n\r\n.modal-overlay {\r\n     position: fixed;\r\n     left: 0;\r\n     right: 0;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 100%;\r\n     height: 100%;\r\n     display: flex;\r\n     justify-content: center;\r\n     align-items: center;\r\n     background-color: var(--modal-overlay);\r\n     z-index: 1000;\r\n     transition: 0.2s ease;\r\n     opacity: 1;\r\n}\r\n\r\n.modal-overlay_hidden {\r\n     top: 100%;\r\n     opacity: 0;\r\n}\r\n\r\n.modal-container {\r\n     display: flex;\r\n     flex-direction: column;\r\n}\r\n\r\n.div-close-modal-button {\r\n     display: flex;\r\n     justify-content: flex-end;\r\n     padding: 1px 5px 1px 0;\r\n     width: 100%;\r\n     background-color: #dee5e6;\r\n     border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.image-modal {\r\n     max-height: 40vw;\r\n     padding: 5px;\r\n     background-color: white;\r\n     border-radius: 0 0 10px 10px;\r\n}\r\n\r\n#close-button {\r\n     cursor: pointer;\r\n}\r\n\r\n#to-top-button {\r\n     text-decoration: none;\r\n     display: inline-block;\r\n     background-color: #abc2c5;\r\n     width: 50px;\r\n     height: 50px;\r\n     text-align: center;\r\n     border-radius: 4px;\r\n     position: fixed;\r\n     bottom: 130px;\r\n     right: 30px;\r\n     transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;\r\n     opacity: 0;\r\n     visibility: hidden;\r\n     z-index: 1000;\r\n}\r\n#to-top-button::after {\r\n     content: \"\\f077\";\r\n     font-family: FontAwesome;\r\n     font-weight: normal;\r\n     font-style: normal;\r\n     font-size: 2em;\r\n     line-height: 50px;\r\n     color: #fff;\r\n}\r\n#to-top-button:hover {\r\n     cursor: pointer;\r\n     background-color: #6c7a7c;\r\n}\r\n#to-top-button:active {\r\n     background-color: #555;\r\n}\r\n#to-top-button.show {\r\n     opacity: 1;\r\n     visibility: visible;\r\n}\r\n";
     n(css,{});

     const createElement = (tag, className = "", id = className) => {
       const element = document.createElement(tag);
       element.className = className;
       element.id = id;
       return element;
     };

     class SearchForm {
       #container;

       constructor(createNewrequest, renderGallery) {
         this.#container = createElement("div", "search-form-container");
         this.createNewrequest = createNewrequest;
         this.renderGallery = renderGallery;
       }

       render() {
         const divSearchForm = createElement("div", "div-search-form");
         const searchForm = createElement("form", "row", "search-form");
         const divInput = createElement("div", "col-auto");
         const searchFormInput = createElement("input", "form-control", "form-input");
         searchFormInput.type = "text";
         searchFormInput.placeholder = "Search images...";
         const divButton = createElement("div", "col-auto");
         const submitFormButton = createElement("button", "btn btn-outline-success");
         submitFormButton.type = "submit";
         submitFormButton.textContent = "Search";
         searchForm.addEventListener("submit", event => {
           event.preventDefault();
           const allImagesContainer = document.querySelector("#all-images-container");
           const divLoadMoreButton = document.querySelector("#div-load-more-button");

           if (allImagesContainer && divLoadMoreButton) {
             allImagesContainer.remove();
             divLoadMoreButton.remove();
           }

           const getImages = async () => {
             try {
               const response = await this.createNewrequest(searchFormInput.value);

               if (!response.ok) {
                 throw new Error("Ошибка получения данных");
               }

               let result = await response.json();
               result = await [...result.hits];
               console.log("in request", result);
               this.renderGallery(result);
             } catch (error) {
               console.log("error:", error);
             } finally {}
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

     class Gallery {
       #container;

       constructor(showModal) {
         this.#container = createElement("div", "gallery-container");
         this.showModal = showModal;
       }

       renderImagesContainer() {
         const allImagesContainer = createElement("div", "row row-cols-1 row-cols-md-5 g-5", "all-images-container");
         allImagesContainer.addEventListener("click", event => {
           const {
             target
           } = event;
           const image = target.closest("#image");

           if (image) {
             const modalOverlayWindow = document.querySelector("#modal-window");
             modalOverlayWindow.classList.remove("modal-overlay_hidden");
             this.showModal(image.dataset.fullSizeImg);
           }
         });
         this.#container.append(allImagesContainer);
         return this.#container;
       }

       renderGallery(arrOfImages) {
         const allImagesContainer = document.querySelector("#all-images-container");

         for (const item of arrOfImages) {
           const itemOfGallery = this.createCard(item);
           allImagesContainer.append(itemOfGallery);
         }
       }

       createCard(item) {
         const itemContainer = createElement("div", "item-container");
         const imgContainer = createElement("div", "img-container");
         const imgFooterContainer = createElement("div", "img-footer-container");
         const imageItem = createElement("img", "image");
         imageItem.src = item.webformatURL;
         imageItem.dataset.fullSizeImg = item.largeImageURL;
         imageItem.title = item.tags;
         const imageAttributes = createElement("ul", "list-group list-group-horizontal");
         const imageLikes = createElement("li", "list-group-item", "image-attributes");
         imageLikes.innerHTML = `<i class="bi bi-heart"> ${item.likes}</i>`;
         const imageComments = createElement("li", "list-group-item", "image-attributes");
         imageComments.innerHTML = `<i class="bi bi-card-text"> ${item.comments}</i>`;
         const imageViews = createElement("li", "list-group-item", "image-attributes");
         imageViews.innerHTML = `<i class="bi bi-eye"> ${item.views}</i>`;
         const imageDownloads = createElement("li", "list-group-item", "image-attributes");
         imageDownloads.innerHTML = `<i class="bi bi-cloud-arrow-down"> ${item.downloads}</i>`;
         itemContainer.append(imgContainer, imgFooterContainer);
         imgContainer.append(imageItem);
         imageAttributes.append(imageLikes, imageComments, imageViews, imageDownloads);
         imgFooterContainer.append(imageAttributes);
         return itemContainer;
       }

     }

     class CreateRequest {
       constructor() {
         this.request = "";
         this.api_key = "22800416-015d794e55de2ad079b2ccfc6";
         this.pageNumber = 1;
         this.url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=&page=1&per_page=15&key=${this.api_key}`;
       }

       async sendRequest() {
         this.url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.request}&page=${this.pageNumber}&per_page=15&key=${this.api_key}`;
         this.incrementPageNumber();
         return fetch(this.url);
       }

       incrementPageNumber() {
         this.pageNumber += 1;
       }

       resetPage() {
         this.pageNumber = 1;
       }

       setRequest(request) {
         this.request = request;
       }

     }

     class LoadMoreButton {
       #container;

       constructor(loadMoreImages, renderMoreGallery) {
         this.#container = createElement("div", "load-more-button-container");
         this.loadMoreImages = loadMoreImages;
         this.renderMoreGallery = renderMoreGallery;
       }

       render() {
         const divLoadMoreButton = createElement("div", "col-auto", "div-load-more-button");
         const loadMoreButton = createElement("button", "btn btn-outline-success btn-lg", "load-more-button");
         loadMoreButton.type = "submit";
         loadMoreButton.textContent = "more...";
         window.addEventListener("scroll", () => {
           let limitOfFetch = 1;
           console.log(limitOfFetch);
           let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

           if (windowRelativeBottom < document.documentElement.clientHeight + 10 && limitOfFetch === 1) {
             limitOfFetch = 0;
             console.log(limitOfFetch);

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
               }
             };

             getMoreImages();
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
                   behavior: "smooth"
                 });
               }, 200);
             }
           };

           getMoreImages();
           divLoadMoreButton.classList.add("hidden");
         });
         divLoadMoreButton.append(loadMoreButton);
         this.#container.append(divLoadMoreButton);
         return this.#container;
       }

     }

     class ModalWindow {
       #container;

       constructor() {
         this.#container = createElement("div", "modal-overlay modal-overlay_hidden", "modal-window");
       }

       render() {
         const modalWindowContaner = createElement("div", "modal-container");
         const divCloseModalButton = createElement("div", "div-close-modal-button");
         const closeModalButton = createElement("i", "bi bi-x-circle", "close-button");
         const divImageModal = createElement("div", "div-delete-modal");
         const imageModal = createElement("img", "image-modal");
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
         this.#container.addEventListener("click", event => {
           const {
             target
           } = event;

           if (target.id === "modal-window" || target.id === "close-button") {
             imageModal.src = "";
             this.#container.classList.add("modal-overlay_hidden");
           }
         });
       }

     }

     class ToTopButton {
       #container;

       constructor() {
         this.#container = createElement("a", "to-top-button");
       }

       render() {
         window.addEventListener("scroll", () => {
           if (pageYOffset > 200) {
             console.log("scrolled");
             this.#container.classList.add("show");
           } else {
             this.#container.classList.remove("show");
           }
         });
         this.#container.addEventListener("click", event => {
           event.preventDefault();
           window.scrollTo({
             top: 0,
             behavior: "smooth"
           });
         });
         return this.#container;
       }

     }

     class App {
       #mainContainer;

       constructor() {
         this.#mainContainer = createElement("div", "container");
         this.searchForm = new SearchForm(this.createNewrequest.bind(this), this.renderGallery.bind(this));
         this.gallery = new Gallery(this.showModal.bind(this));
         this.request = new CreateRequest();
         this.loadMoreButton = new LoadMoreButton(this.loadMoreImages.bind(this), this.renderMoreGallery.bind(this));
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

     const app = new App();
     app.run();

}());
