import * as Utils from "../core/Utils";

export default class ToTopButton {
     #container;

     constructor() {
          this.#container = Utils.createElement("a", "to-top-button");
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

          this.#container.addEventListener("click", (event) => {
               event.preventDefault();

               window.scrollTo({
                    top: 0,
                    behavior: "smooth",
               });
          });

          return this.#container;
     }
}
