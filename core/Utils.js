export const createElement = (tag, className = "", id = className) => {
     const element = document.createElement(tag);
     element.className = className;
     element.id = id;
     return element;
};
