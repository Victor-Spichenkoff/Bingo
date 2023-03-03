import React from "react";
import './PlayerCard.css'
import './js/buttons'
import './js/verifyBingo'


import CardRow from "./PlayerCardRow";

let nums = []


export default class PlayerCard extends React.Component {
    
    randomNumberInterval(a=1, b=100) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }
    
    generateNewNumber(PlayerNumbers=[]) {
        let num = 0
        while (true) {
            num = this.randomNumberInterval()
            if(!PlayerNumbers.includes(num)) {
                PlayerNumbers.unshift(num)
                PlayerNumbers.sort((a,b) => a -b)
                break
            }
        }
    }

    generateNumbers() {
        while (nums.length < 15) {
            this.generateNewNumber(nums)
        }
        return nums
    }
    numbers = this.generateNumbers()
    

    render() {
        return (
        <div className="player-area">
            {/* <button id='play-pause'><i className="fa-solid fa-play"></i></button> */}
            <button id="alert-bingo" className="locked alert-bingo2">BINGO!</button>
            <div className="player-card-area">
                <CardRow numbers={this.numbers} />
            </div>
            <button id="alert-bingo" className="locked alert-bingo1">BINGO!</button>
        </div>)
    }
}