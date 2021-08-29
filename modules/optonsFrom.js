import * as Utils from "../core/Utils";

export default class OptonsForm {
     #container;

     constructor() {
          this.#container = Utils.createElement(
               "div",
               "options-form-container"
          );
     }

     render() {
          const divOptonsForm = Utils.createElement("div", "div-options-form");
          const optonsForm = Utils.createElement("form", "row", "options-form");

          const divIFormCheckHorizontal = Utils.createElement(
               "div",
               "form-check"
          );

          const orientationChckboxHorizontal = Utils.createElement(
               "input",
               "form-check-input",
               "horizontal"
          );
          orientationChckboxHorizontal.type = "checkbox";

          const labelChckboxHorizontal = Utils.createElement(
               "label",
               "form-check-label"
          );
          labelChckboxHorizontal.htmlFor = "horizontal";
          labelChckboxHorizontal.textContent = "horizontal";

          const divIFormCheckVertical = Utils.createElement(
               "div",
               "form-check"
          );

          const orientationChckboxVertical = Utils.createElement(
               "input",
               "form-check-input",
               "vertical"
          );
          orientationChckboxVertical.type = "checkbox";

          const labelChckboxVertical = Utils.createElement(
               "label",
               "form-check-label"
          );
          labelChckboxVertical.htmlFor = "vertical";
          labelChckboxVertical.textContent = "vertical";

          divOptonsForm.append(optonsForm);
          optonsForm.append(divIFormCheckHorizontal);
          optonsForm.append(divIFormCheckVertical);
          divIFormCheckHorizontal.append(orientationChckboxHorizontal);
          divIFormCheckHorizontal.append(labelChckboxHorizontal);

          divIFormCheckVertical.append(orientationChckboxVertical);
          divIFormCheckVertical.append(labelChckboxVertical);

          this.#container.append(divOptonsForm);

          return this.#container;
     }
}
