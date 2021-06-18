const startBtn = document.querySelector("#start")

const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')

const timeEl = document.querySelector("#time")

const board = document.querySelector('#board')

let time = 0

const circleColors = ['red', 'green', 'blue', 'yellow', 'orange', 'violet', 'grey', 'white']

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up')
        startGame()
    }
})

let score = 0

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRndCircle()
    }
})

function startGame() {
    setInterval(decreaseaTime, 1000)
    createRndCircle()
    setTime(time)
}

function decreaseaTime() {
    console.log(time);
    if (time == 0) {
        finishGame()
    } else {
        let current = --time
        setTime(current > 9 ? current : '0' + current.toString())
    }
}

function setTime(val) {
    timeEl.innerHTML = `00:${val}`
}

function finishGame() {
    timeEl.parentNode.style.opacity = '0'
    board.innerHTML = `<h1>SCORE: <span class='primary'>${score}</span></h1>`
}

const minDiameter = 15
const maxDiameter = 60

function createRndCircle() {
    const circle = document.createElement('div')

    let diameter = getRndNum(minDiameter, maxDiameter)
    const { width, height } = board.getBoundingClientRect()
    const x = getRndNum(0, width - diameter)
    const y = getRndNum(0, height - diameter)
    const index = Math.floor(Math.random() * circleColors.length)
    const color = circleColors[index]

    circle.classList.add('circle')
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    circle.style.width = `${diameter}px`
    circle.style.height = `${diameter}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}