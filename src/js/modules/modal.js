import { createComponent } from './createComponent.js'
import { clickCounter } from './clickCounter.js'

export const createModal = (numberOfClicks) => {
	const overlay = createComponent('div', '')
	const popUp = createComponent('div')
	const heading = createComponent('h2', 'Alert!')
	const paragraph = document.createElement('p')
	paragraph.innerHTML = `You have clicked <strong>${numberOfClicks} ${numberOfClicks === 1 ? 'time' : 'times'}</strong> to related button.`
	const closePopUp = createComponent('button', '')

	overlay.classList.add('overlay')
	closePopUp.classList.add('close-pop-up')
	popUp.classList.add('pop-up')

	popUp.appendChild(heading)
	popUp.appendChild(paragraph)
	popUp.appendChild(closePopUp)
	overlay.appendChild(popUp)

	if (numberOfClicks > 5) {
		const resetCounterBtn = createComponent('button', 'Reset Counter')
		resetCounterBtn.classList.add('reset')
		popUp.appendChild(resetCounterBtn)

		resetCounterBtn.onclick = () => {
			overlay.remove()
			clickCounter('reset')
		}
	}

	closePopUp.addEventListener('click', () => {
		overlay.remove()
	})

	window.addEventListener('click', (e) => {
		if (document.querySelector('.overlay') && !document.querySelector('.pop-up').contains(e.target) && !document.querySelector('button').contains(e.target)) {
			overlay.remove()
		}
	})

	return overlay
}
