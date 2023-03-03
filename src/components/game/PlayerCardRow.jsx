import React from "react";
import './js/buttons'

export default props => {
    return (
        <React.Fragment>
    <div className="player-row">
        <p className="player-number">{`${props.numbers[0]}`}</p>
        <p className="player-number">{props.numbers[1]}</p>
        <p className="player-number">{props.numbers[2]}</p>
        <p className="player-number">{props.numbers[3]}</p>
        <p className="player-number">{props.numbers[4]}</p>
    </div>
    <div className="player-row">
        <p className="player-number">{`${props.numbers[5]}`}</p>
        <p className="player-number">{props.numbers[6]}</p>
        <p className="player-number">{props.numbers[7]}</p>
        <p className="player-number">{props.numbers[8]}</p>
        <p className="player-number">{props.numbers[9]}</p>
    </div>
    <div className="player-row">
        <p className="player-number">{`${props.numbers[10]}`}</p>
        <p className="player-number">{props.numbers[11]}</p>
        <p className="player-number">{props.numbers[12]}</p>
        <p className="player-number">{props.numbers[13]}</p>
        <p className="player-number" nhe='true'>{props.numbers[14]}</p>
    </div>
        </React.Fragment>
    
)}