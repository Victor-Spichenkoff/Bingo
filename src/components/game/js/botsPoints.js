import $ from 'jquery'

const names = Array.from(document.getElementsByClassName('name'))
const points = Array.from(document.getElementsByClassName('points'))

let array1 = generateNumbers()
let array2 = generateNumbers()
let array3 = generateNumbers()
let array4 = generateNumbers()
function randomNumberInterval(a=1, b=100) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function generateNewNumber(luckyNumbers=[]) {
    let num = 0
    while (true) {
        num = randomNumberInterval()
        if(!luckyNumbers.includes(num)) {
            luckyNumbers.unshift(num)
            luckyNumbers.sort((a,b) => a -b)
            break
        }
    }
    return num
}

function generateNumbers() {
    let nums = []
    while (nums.length < 15) {
        generateNewNumber(nums)
    }
    return nums
}


let luckyNumbers = []

function getluckyNumbers() {
    let luckyNumbers = []
    const balls = $('.ball')
    balls.each((i, ball) => {
        if(ball.classList.contains('lucky')) {
            luckyNumbers.unshift(parseInt(ball.innerHTML))
        }
    });
    return luckyNumbers
}

function rightNumbers (array) {
    let luckyNumbers = getluckyNumbers()
    let botArray = array
    let rightBotNumbers = 0
    for(let num of botArray) {
        for(let tableNum of luckyNumbers) {
            if(tableNum === num) {
                rightBotNumbers++
            }
        }
        if(rightBotNumbers >= 15) {
            return 'win'
        }
    }
    return rightBotNumbers
}


function botWin(id) {
    const bot = document.querySelector(`#name${id}`).innerHTML
    const congratulationsArea = document.querySelector('.current-number')
    congratulationsArea.classList.add('botWin')
    congratulationsArea.innerHTML = `<p>${bot}<br> Ganhou </p>`
}

function updatePoints(id, numberOfRights) {
    //pegar id, nuemros certos e coloca na tela, envolver o rightNumbers(arrayX)
    
    //Vê se não ganhou
    if(numberOfRights === 'win') {
        setTimeout(() => {
            botWin(id)
            document.getElementById(`points${id}`).innerHTML = 15
        },1000)
    } else {
        document.getElementById(`points${id}`).innerHTML = numberOfRights
    }
}

setInterval(() => {
    updatePoints(1,rightNumbers(array1))
    updatePoints(2, rightNumbers(array2))
    updatePoints(3, rightNumbers(array3))
    updatePoints(4, rightNumbers(array4))
}, 900)
// rightNumbers(array1)