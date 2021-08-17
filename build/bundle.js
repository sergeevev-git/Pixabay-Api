
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

    var css = ":root {\r\n     --modal-overlay: rgb(84, 103, 145, 0.6);\r\n }\r\n\r\nbody {\r\n     background: rgb(221, 229, 230);\r\n     margin: 30px 0;\r\n     padding: 0;     \r\n}\r\n/*\r\n.main-container {\r\n     display: flex;\r\n     flex-direction: column;\r\n     justify-content: flex-start;\r\n     align-items: center;\r\n     margin: 0 auto;\r\n     padding: 0 10% 0 10%;\r\n\r\n}\r\n*/\r\n.search-form-container {\r\n     display: flex;\r\n     justify-content: center;\r\n}\r\n\r\n#div-search-form {\r\n     padding: 10px 15px 10px 15px;\r\n     border-radius: 15px;\r\n     box-shadow: 5px -5px 10px rgb(174, 193, 196), -5px 5px 10px rgb(250, 250, 250);\r\n}\r\n\r\n#form-input {\r\n     background-color: #f1fafc;\r\n}\r\n/*\r\n.gallery-container {\r\n     margin: 20px 0 20px 0;\r\n     max-width: 90vw;\r\n}\r\n*/\r\n#all-images-container {\r\n     margin: 30px 0 30px 0;\r\n     padding: 15px 0px 20px 0px;\r\n     border-radius: 25px;\r\n     background-color: rgb(206, 219, 221);\r\n     box-shadow: 10px -10px 20px rgb(174, 193, 196), -10px 10px 20px rgb(250, 250, 250);\r\n}\r\n\r\n#item-container {\r\n     margin-top: 10px;\r\n     display: flex;\r\n     flex-direction: column;\r\n     justify-content: center;\r\n}\r\n\r\n#img-container {\r\n     display: flex;\r\n     justify-self: center;\r\n    \r\n}\r\n\r\n#img-container img {\r\n     cursor: pointer;\r\n     min-width: 100%;\r\n     height: auto;\r\n     border-radius: 5px 5px 0 0;\r\n     border: thin double #DDE5E6;\r\n}\r\n\r\n.img-footer-container {\r\n     font-size: 11px;\r\n     background-color: #bbc8ca;\r\n     border-radius: 0 0 5px 5px;\r\n     border: thin double #DDE5E6;\r\n     border-width: 0px 1px 1px 1px;\r\n     justify-self: flex-end;\r\n}\r\n\r\n#image-attributes {\r\n     display: flex;\r\n     flex-direction: row;\r\n     flex-wrap: wrap;\r\n     justify-content: flex-start;\r\n     align-items: center;\r\n     margin: 0 auto;\r\n     padding: 3px;\r\n     background: none;\r\n     border: none;\r\n     \r\n\r\n}\r\n/*     \r\n.load-more-button-container {\r\n     margin: 20px 0 20px 0;\r\n}\r\n\r\n*/\r\n#div-load-more-button {\r\n     display: flex;\r\n     justify-content: center;\r\n}\r\n\r\n#load-more-button {\r\n     box-shadow: 5px -5px 10px rgb(174, 193, 196), -5px 5px 10px rgb(250, 250, 250);\r\n}\r\n\r\n.modal-overlay {\r\n     position: fixed;\r\n     left: 0;\r\n     right: 0;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 100%;\r\n     height: 100%;\r\n \r\n     display: flex;\r\n     justify-content: center;\r\n     align-items: center;\r\n \r\n     background-color: var(--modal-overlay);\r\n     z-index: 1000;\r\n     transition: 0.2s ease;\r\n     opacity: 1;\r\n }\r\n \r\n.modal-overlay_hidden {\r\n     top: 100%;\r\n     opacity: 0;\r\n }\r\n\r\n.modal-container{\r\n     display: flex;\r\n     flex-direction: column;\r\n         \r\n}\r\n\r\n.div-close-modal-button {\r\n     display: flex;\r\n     justify-content: flex-end;\r\n     padding: 1px 5px 1px 0;\r\n     width: 100%;\r\n     background-color: #DEE5E6;\r\n     border-radius: 10px 10px 0 0; \r\n}\r\n\r\n.image-modal {\r\n     max-height: 40vw;\r\n     padding: 5px;\r\n     background-color: white;\r\n     border-radius: 0 0 10px 10px;\r\n}\r\n\r\n #close-button {\r\n      cursor: pointer;\r\n }";
    n(css,{});

    const createElement = (tag, className = '', id = className) => {
      const element = document.createElement(tag);
      element.className = className;
      element.id = id;
      console.log(element);
      return element;
    };

    class SearchForm {
      #container;

      constructor(createNewrequest, renderGallery) {
        // this.#container = document.createElement('div')
        // this.#container.className = 'search-form-container'
        this.#container = createElement("div", "search-form-container");
        this.createNewrequest = createNewrequest;
        this.renderGallery = renderGallery;
      }

      render() {
        // const divSearchForm = document.createElement('div')
        // divSearchForm.id = 'div-search-form'
        const divSearchForm = createElement("div", "div-search-form"); // const searchForm = document.createElement('form')
        // searchForm.className = 'row'
        // searchForm.id = 'search-form'

        const searchForm = createElement("form", "row", "search-form"); // const divInput = document.createElement('div')
        // divInput.className = 'col-auto'

        const divInput = createElement("div", "col-auto"); // const searchFormInput = document.createElement('input')
        // searchFormInput.className = 'form-control'
        // searchFormInput.id = 'form-input'

        const searchFormInput = createElement("input", "form-control", "form-input");
        searchFormInput.type = "text";
        searchFormInput.placeholder = "Search images..."; // const divButton = document.createElement('div')
        // divButton.className = 'col-auto'

        const divButton = createElement("div", "col-auto"); // const submitFormButton = document.createElement('button')
        // submitFormButton.className = 'btn btn-outline-success'

        const submitFormButton = createElement("button", "btn btn-outline-success");
        submitFormButton.type = "submit";
        submitFormButton.textContent = "Search";
        searchForm.addEventListener("submit", event => {
          event.preventDefault();
          const allImagesContainer = document.querySelector("#all-images-container");
          const loadMoreForm = document.querySelector("#div-load-more-button");

          if (allImagesContainer && loadMoreForm) {
            allImagesContainer.remove();
            loadMoreForm.remove();
          }

          const getImages = async () => {
            try {
              const response = await this.createNewrequest(searchFormInput.value); // console.log(response)

              if (!response.ok) {
                throw new Error("Ошибка получения данных");
              }

              let result = await response.json();
              result = await [...result.hits]; // console.log('in request', result)

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
        // this.#container = document.createElement('div')
        // this.#container.className = 'gallery-container'
        this.#container = createElement("div", "gallery-container");
        this.showModal = showModal;
      }

      renderImagesContainer() {
        // const allImagesContainer = document.createElement('div')
        // allImagesContainer.className = 'row row-cols-1 row-cols-md-5 g-5'
        // allImagesContainer.id = 'all-images-container'
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
        // const itemContainer = document.createElement('div')
        // itemContainer.id = 'item-container'
        const itemContainer = createElement("div", "item-container"); // const imgContainer = document.createElement('div')
        // imgContainer.id = 'img-container'

        const imgContainer = createElement("div", "img-container"); // const imgFooterContainer = document.createElement('div')
        // imgFooterContainer.className = 'img-footer-container'

        const imgFooterContainer = createElement("div", "img-footer-container"); // const imageItem = document.createElement('img')
        // imageItem.id = 'image'

        const imageItem = createElement("img", "image");
        imageItem.src = item.previewURL;
        imageItem.dataset.fullSizeImg = item.largeImageURL;
        imageItem.title = item.tags; // const imageAttributes = document.createElement('ul')
        // imageAttributes.className = 'list-group list-group-horizontal'

        const imageAttributes = createElement("ul", "list-group list-group-horizontal"); // const imageLikes = document.createElement('li')
        // imageLikes.className = 'list-group-item'
        // imageLikes.id = 'image-attributes'

        const imageLikes = createElement("li", "list-group-item", "image-attributes");
        imageLikes.innerHTML = `<i class="bi bi-heart"> ${item.likes}</i>`; // const imageComments = document.createElement('li')
        // imageComments.className = 'list-group-item'
        // imageComments.id = 'image-attributes'

        const imageComments = createElement("li", "list-group-item", "image-attributes");
        imageComments.innerHTML = `<i class="bi bi-card-text"> ${item.comments}</i>`; // const imageViews = document.createElement('li')
        // imageViews.className = 'list-group-item'
        // imageViews.id = 'image-attributes'

        const imageViews = createElement("li", "list-group-item", "image-attributes");
        imageViews.innerHTML = `<i class="bi bi-eye"> ${item.views}</i>`; // const imageDownloads = document.createElement('li')
        // imageDownloads.className = 'list-group-item'
        // imageDownloads.id = 'image-attributes'

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
        this.incrementPageNumber(); // console.log(this.request, this.pageNumber, this.url)

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
        // this.#container = document.createElement("div");
        // this.#container.className = "load-more-button-container";
        this.#container = createElement("div", "load-more-button-container");
        this.loadMoreImages = loadMoreImages;
        this.renderMoreGallery = renderMoreGallery;
      }

      render() {
        // const divLoadMoreButton = document.createElement("div");
        // divLoadMoreButton.className = "col-auto";
        // divLoadMoreButton.id = "div-load-more-button";
        const divLoadMoreButton = createElement("div", "col-auto", "div-load-more-button"); // const loadMoreButton = document.createElement("button");
        // loadMoreButton.className = "btn btn-outline-success btn-lg";
        // loadMoreButton.id = "load-more-button";

        const loadMoreButton = createElement("button", "btn btn-outline-success btn-lg", "load-more-button");
        loadMoreButton.type = "submit";
        loadMoreButton.textContent = "more...";
        loadMoreButton.addEventListener("click", () => {
          const getMoreImages = async () => {
            try {
              const response = await this.loadMoreImages(); // console.log(response)

              if (!response.ok) {
                throw new Error("Ошибка получения данных");
              }

              let result = await response.json();
              result = await [...result.hits]; // console.log('in load more', result)

              this.renderMoreGallery(result); // const response = await this.loadMoreImages()
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
            } finally {}
          };

          getMoreImages();
        });
        divLoadMoreButton.append(loadMoreButton);
        this.#container.append(divLoadMoreButton);
        return this.#container;
      }

    }

    class modalWindow {
      #container;

      constructor() {
        // this.#container = document.createElement('div')
        // this.#container.className = 'modal-overlay modal-overlay_hidden'
        // this.#container.id = 'modal-window'
        this.#container = createElement("div", "modal-overlay modal-overlay_hidden", "modal-window");
      }

      render() {
        // const modalWindowContaner = document.createElement("div");
        // modalWindowContaner.className = "modal-container";
        const modalWindowContaner = createElement("div", "modal-container"); // const divCloseModalButton = document.createElement("div");
        // divCloseModalButton.className = "div-close-modal-button";

        const divCloseModalButton = createElement("div", "div-close-modal-button"); // const closeModalButton = document.createElement("i");
        // closeModalButton.className = "bi bi-x-circle";
        // closeModalButton.id = "close-button";

        const closeModalButton = createElement("i", "bi bi-x-circle", "close-button"); // const divImageModal = document.createElement("div");
        // divImageModal.className = "div-delete-modal";

        const divImageModal = createElement("div", "div-delete-modal"); // const imageModal = document.createElement("img");
        // imageModal.className = "image-modal";

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

    class App {
      #mainContainer;

      constructor() {
        this.#mainContainer = document.createElement('div');
        this.#mainContainer.className = 'container';
        this.searchForm = new SearchForm(this.createNewrequest.bind(this), this.renderGallery.bind(this));
        this.gallery = new Gallery(this.showModal.bind(this));
        this.request = new CreateRequest();
        this.loadMoreButton = new LoadMoreButton(this.loadMoreImages.bind(this), this.renderMoreGallery.bind(this));
        this.modalWindow = new modalWindow();
      }

      run() {
        document.body.append(this.#mainContainer);
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
