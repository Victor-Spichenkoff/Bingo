import React from "react";

import Bot from "./Bot";
import './js/botsPoints'

export default class AllBot extends React.Component { 
    generateNames() {
        let names = ['Victor', 'Maria', 'Vera', 'Nicole', 'Marina', 'Emma', 'João', 'Telma', 'Roger', 'Russel', 'Max', 'Carlos', 'Nelson', 'Caramelo', 'Fábio', 'Alex']
        let index = []

        function randomNumberInterval(a=1, b=100) {
            return Math.floor(Math.random() * (b - a + 1)) + a
        }
        
        function generateNewNumber(luckyNumbers=[]) {
            let num = 0
            while (true) {
                num = randomNumberInterval(0, names.length-1)
                if(!luckyNumbers.includes(num)) {
                    luckyNumbers.unshift(num)
                    luckyNumbers.sort((a,b) => a -b)
                    break
                }
            }
            return num
        }
        let finalNames = []
        while(finalNames.length<4) {
            let n = generateNewNumber(index)
            finalNames.unshift(names[n])
        }

        return finalNames
    }
    names = this.generateNames()


    render() {
    return(
    <div className="bot-area">
        <p className="infoBots">Pontuações</p>
        <Bot botID={1} name={this.names[0]} points={0}></Bot>
        <Bot botID={2} name={this.names[1]} points={0}></Bot>
        <Bot botID={3} name={this.names[2]} points={0}></Bot>
        <Bot botID={4} name={this.names[3]} points={0}></Bot>
        <Bot botID={'player'} name='Offline' points={''}></Bot>
    </div>)
    }
}