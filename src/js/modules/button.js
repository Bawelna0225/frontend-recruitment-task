import { createModal } from './modal.js'
import { clickCounter } from './clickCounter.js'

const body = document.querySelector('body')

export const createButton = (content) => {
	const button = document.createElement('button')
	button.textContent = content

	button.addEventListener('click', () => {
		let modal = createModal(clickCounter('increase'))
		body.appendChild(modal)
	})


	return button
}
