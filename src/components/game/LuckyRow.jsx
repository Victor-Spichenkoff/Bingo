import { render } from "@testing-library/react"
import { timers } from "jquery"
import React from "react"
// function generateRow() {
//     let nums = []
//     let cont = 0
//     while (cont < 101) {
//         nums.unshift(cont++)
//         nums.sort((a,b) => a -b)
//     }

//     cont = 0
//     let row = <div className="lucky-number">{nums[cont]}</div>
//     row += <div className="lucky-number">{nums[cont++]}</div>
//     // while (cont < 100) {
//     //     cont++
//     //     row += <div className="lucky-number">{nums[cont]}</div>
//     //     console.log(cont)
//     // }
//     return row
// }
// generateRow()

let n1 = 1
export default class LuckyNumbers extends React.Component {
    state = {
        firstNum: this.props.first
    }

    updateFirst() {
        let {firstNum} = this.state
        console.log(firstNum)
        this.setState({firstNum: firstNum++})
        return firstNum
    }

    render() {
        return (
        <React.Fragment>
        <div className="lucky-row">
            <div className="lucky-number">
                <div className="ball">{this.state.firstNum}</div>
            </div>

            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball">{++this.state.firstNum}</div></div>
            <div className="lucky-number"><div className="ball {lucky}">{++this.state.firstNum}</div></div>
        </div>
        </React.Fragment>
        )
    }

}