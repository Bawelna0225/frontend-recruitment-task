export const clickCounter = (action) => {
	let counter

	if (localStorage.getItem('number-of-user-clicks') === null) {
		counter = 0
	} else {
		counter = localStorage.getItem('number-of-user-clicks')
	}

	switch (action) {
		case 'increase':
			counter++
			localStorage.setItem('number-of-user-clicks', counter)
			break
		case 'reset':
			localStorage.clear()
			counter = 0
			break
	}

	localStorage.clear()
	localStorage.setItem('number-of-user-clicks', counter)

	return counter
}
