import $ from 'jquery'
window.onload = (function () {

    
function changeNum(num) {
    console.log(num)
    if(num.hasAtribute('selected')) {
        num.attr('selected', false)
        console.log('pos')
    } else {
        num.attr('selected', true)
        console.log('tioru')
    }
    console.log('mhe')
}

const playerNumber = $('.player-number')
playerNumber.each((i, num) => {
    num.onclick = () => {
        if(num.classList.contains('selected-number')) {
            num.classList.remove('selected-number')
        } else {
            num.classList.add('selected-number')
        }
    }
})




})