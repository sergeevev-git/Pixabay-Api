export const createElement = (tag, className, id) => {
     const element = document.createElement(tag)
     element.className = className
     element.id = id
     console.log(element)
     return element
}