import { createButton } from './modules/button.js'
import { createComponent } from './modules/createComponent.js'

const body = document.querySelector('body')

// Creating img
const createImg = (src, alt) => {
	const img = document.createElement('img')
	img.src = src
	alt === '' ? img.setAttribute('alt', ' ') : img.setAttribute('alt', alt)
	return img
}
// Creating Section
const createSection = () => {
	const section = document.createElement('section')
	body.appendChild(section)

	// Creating Components
	const image = createImg('./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg', '')
	const rightPanel = createComponent('div', '')
	const heading = createComponent('h1', 'Lorem Ipsum')
	const paragraph = createComponent('p', 'Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.')
	const button = createButton('Button')

	// Appending Elements to section
	section.appendChild(image)
	section.appendChild(rightPanel)

	// Appending Elements to rightPanel
	rightPanel.appendChild(heading)
	rightPanel.appendChild(paragraph)
	rightPanel.appendChild(button)
}

createSection()
