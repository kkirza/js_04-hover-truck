const board = document.querySelector('#board')
const SQUARES_NUMBER = 500;
const COUNT_COLOR = 500
const colors = setRandValueColor(COUNT_COLOR)

for (let i = 0 ; i < SQUARES_NUMBER; ++i){
	const square = document.createElement('div')
	square.classList.add('square')
	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseleave', () => removeColor(square))
	board.append(square)

}

function setColor(elem){
	const color = getRandColor()
	elem.style.backgroundColor = color

	elem.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
}
function removeColor(elem){
	elem.style.backgroundColor = '#1d1d1d'
	elem.style.boxShadow = `0 0 2px #000`
}

function getRandColor(){
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
function setRandValueColor(array_size)
 {
	let storageColor=[];
	for (let i = 0 ; i < array_size; ++i){
		storageColor [i] = '#'
		for (let j = 0; j < 3; ++j){
			let dec = Math.floor(Math.random() * 255)
			let hexColor = (dec).toString(16);
			
			storageColor[i]+=hexColor;
		}
	}
	return storageColor;
}