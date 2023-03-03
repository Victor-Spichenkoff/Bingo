import $ from 'jquery'

function createNumber(a=1, b=100) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}


function changeColor(allBall=fullBall) {
    let colors = ['rgb(59, 181, 230)', 'rgb(155, 13, 13)', 'rgb(227, 230, 54)','rgb(35, 211, 93)', 'rgb(191, 24, 233)']
    let x = createNumber(0, colors.length-1)
    allBall.style.backgroundColor = colors[x] 
}



let luckyNumbers = []

function generateNewNumber(luckyNumbers=[]) {
    let num = 0
    while (true) {
        num = createNumber()
        if(luckyNumbers.length >= 100) {
            return 'end'
        }

        if(!luckyNumbers.includes(num)) {
            luckyNumbers.unshift(num)
            luckyNumbers.sort((a,b) => a -b)
            break
        }
    }
    return num
}


//tirar a bola e colocar "Fim de jogo"
function endBalls() {
    console.log('Acabou')
}


let fullBall
let ball =
setTimeout(() => {
    fullBall = document.querySelector('.external-ball')
    ball= document.querySelector('#current-number-text')
}, 1000)




function makeApear(fullBall, newNumber) {
    $(fullBall).fadeOut(1).fadeIn(700, () => ball.innerHTML = newNumber)

}


//adiciona 'lucky', classe que deixa marcado
function markOnLucked(num) {
    const allBalls = document.querySelectorAll('.ball')
    allBalls.forEach(element => {
        // console.log('elemnto '+element.innerHTML)
        if(element.innerHTML === num) {
            element.classList.add('lucky')
        }
    });
}


function createNumberInSeconds(s=3000, array=luckyNumbers) {
    let i = setInterval(()=> {
        let newNumber = generateNewNumber(array)
        if(newNumber === 'end') {
            clearInterval(i)
            endBalls()
        }
        //processos de arrumar a nova bola e marcar
        changeColor(fullBall)
        makeApear(fullBall, newNumber)
        ball.innerHTML = newNumber
        markOnLucked(ball.innerHTML)
        // console.log(ball.innerHTML)
        // console.log(array)

        //ganhou, corta a geracao
        if(document.querySelector('.current-number').innerHTML === 'Parabéns, você ganhou!!!') {
            clearInterval(i)
        }
        
        //outro ganhou
        let o = stopGenerate()
        console.log(o)
        if(o) {
            clearInterval(i)
        }
    }, s)
}


function stopGenerate() {
    let areaContent = document.querySelector('.current-number').innerHTML
    for(let letter of areaContent.split(' ')) {
        if(letter==="Ganhou") {
            return true
        }
    }
}

createNumberInSeconds()
