const board = document.querySelector('#board')

const SQUARES_NUMBERS = 500

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'violet', 'grey', 'white']

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(el) {
    const color = randomColor()
    console.log(color);
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    setTimeout(() => {
        el.style.boxShadow = `0 0 2px black`
    }, 350)
}

function randomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}