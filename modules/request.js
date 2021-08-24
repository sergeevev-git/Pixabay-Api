export default class CreateRequest {
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
