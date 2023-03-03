import $ from 'jquery'



function getElement(id) {
    let element = $(id)
    if(element) {
        return element
    } else {
        let i = setInterval(()=> {
            element = $(id)
            if(element) clearInterval(i)
        }, 1000)
        return element
    }
}





//15 selecionados?
function verifyUnlock() {
    const numbers = $('.player-number')
    let checkedNumbers = 0

    numbers.each((i, num) => {
        if(num.classList.contains('selected-number')) {
            checkedNumbers ++
        }
    })  

    const bingoButton = document.querySelector('#alert-bingo')
    const bingoButton2 = document.querySelector('.alert-bingo1')
    if(checkedNumbers >= 15) {
        bingoButton.classList.remove('locked')
        bingoButton2.classList.remove('locked')
        // bingoButtonOn =  document.getElementById('alert-bingo')
        bingoButton.onclick = verifyBingo
    }
    
    if(checkedNumbers <15) {
        bingoButton.classList.add('locked')
        bingoButton2.classList.add('locked')
    }
    
}
    


setInterval(verifyUnlock, 1000)


function getluckyNumbers() {
    let luckyNumbers = []
    const balls = getElement('.ball')
    balls.each((i, ball) => {
        if(ball.classList.contains('lucky')) {
            luckyNumbers.unshift(ball.innerHTML)
        }
    });

    let playerNumbers = []
    const playerNums = Array.from(document.getElementsByClassName('player-number'))
    playerNums.forEach((num) => {
        playerNumbers.unshift(num.innerHTML)
    })
    console.log(playerNumbers)
    return {luckyNumbers, playerNumbers}
}

//BINGO CERTO
function verifyBingo () {
    let {luckyNumbers, playerNumbers} = getluckyNumbers()
    let rightPLayerNumbers = 0
    for(let playerNum of playerNumbers) {
        for(let tableNum of luckyNumbers) {
            if(tableNum === playerNum) {
                rightPLayerNumbers++
            }
        }
        if(rightPLayerNumbers >= 15) {
            youWin()
        }
    }
}

function youWin() {
    const congratulationsArea = document.querySelector('.current-number')
    congratulationsArea.classList.add('playerWin')
    congratulationsArea.innerHTML = '<p>Parabéns<br> você ganhou!!!</p>'
}


//para teste/ coloca classe em
function putClass() {
    const numbers = getElement('.player-number')
    for(let c =0; c<14; c++) {
        numbers.addClass('selected-number')
    }
}
// setTimeout(putClass, 1000)
