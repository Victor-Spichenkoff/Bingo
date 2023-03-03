import React from 'react'

import './CurrentLuckyNumber.css'
import './js/generateNumber'

export default class CuurentLuckyNumber extends React.Component {
    state = {
        newNumber: 0,
        luckyNumbers: []
    }




    render() {
        return (
            <div className='current-number'>
                <div className="external-ball">
                    <div className="internal-ball" id='current-number-text'>
                        Start
                    </div>
                </div>
            </div>
        )
    }
}