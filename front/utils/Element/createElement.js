import addEventListener from './addEventListener.js';
const createElement = ({ styles, elementName = '', children, className, innerHTML, innerText, eventListener }) => {
    let element = document.createElement(elementName);

    if (styles)
        element.style = styles

    if (children)
        if (Array.isArray(children))
            children.forEach(child => element.appendChild(child))
        else
            element.appendChild(children)

    if (className)
        element.classList.add(className)

    if (innerHTML)
        element.innerHTML = innerHTML

    if (innerText)
        element.innerText = innerText

    if (eventListener)
        addEventListener({ elements: element, event: eventListener.event, function: eventListener.function })

    return element;
}

export default createElement;