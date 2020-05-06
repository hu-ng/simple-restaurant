const createElement = ({element, attributes, content} = {}) => {
	// Create a custom element based on name, attributes, and content
  let el = document.createElement(element)
  
  // Add attributes
  if (attributes) {
    for (const [attr, value] of Object.entries(attributes)) {
      el.setAttribute(attr, value)
    }
  }

	// Add content
	if (content instanceof HTMLElement) {
		el.appendChild(content)
	} else if (content) {
		el.innerHTML = content
	}
  return el
}


const resetPage = () => {
  const content = document.querySelector("div.page-content");
  if (content) {content.parentNode.removeChild(content)}
}

export { createElement, resetPage}