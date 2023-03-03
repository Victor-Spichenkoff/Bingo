import React from 'react'

import './Bot.css'

export default class Bot extends React.Component {
    render() {
        return (
        <div className={this.props.botID==='player'? 'player' : `bot bot${this.props.botID}`}>
            <p className='name' id={`name${this.props.botID}`}>{this.props.name}</p>
            <p className='points' id={`points${this.props.botID}`}>{this.props.points}</p>
        </div>)
    }
}