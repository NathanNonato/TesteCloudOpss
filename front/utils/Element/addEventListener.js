function addMultiples({ elements, fieldName, event, fn }) {
    if (!!fieldName)
        return fieldName.map(field => {
            const element = document.querySelector(field)

            if (!element) return console.error(`Element ${field} not found`);

            element.addEventListener(event, fn)
            return () => element.removeEventListener(event, fn)
        })

    if (!!elements)
        return elements.map(element => {
            if (!element) return console.error(`Element ${field} not found`);

            element.addEventListener(event, fn)
            return () => element.removeEventListener(event, fn)
        })
}

const isArray = (array) => Array.isArray(array)

function addEventListener({ elements, fieldName = '', event, function: fn }) {
    if (isArray(fieldName))
        return addMultiples({ fieldName, event, fn })

    if (isArray(elements))
        return addMultiples({ elements, event, fn })

    if (elements)
        return addMultiples({ elements: [elements], event, fn })

    return addMultiples({ fieldName: [fieldName], event, fn })
}


export default addEventListener;