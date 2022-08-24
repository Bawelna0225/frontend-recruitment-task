export const createComponent = (item, content) => {
	const element = document.createElement(item)
	element.textContent = content

	return element
}
