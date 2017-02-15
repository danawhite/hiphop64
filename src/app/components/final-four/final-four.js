import React from 'react';
import ReactDOM from 'react-dom';

import { finalFour } from '../../models/Rounds';
import Matchup from '../matchup/matchup';

export default class FinalFour extends React.Component {
    constructor(props) {
        super(props);

        this.style = {
            container: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'yellow',
                margin: 10
            }
        }
    }

    render() {
        return (
        <div style={this.style.container}>
            {finalFour.map(round => (
            <div style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: 'aqua'}}>
                <Matchup key={round}/>
            </div>
            ))}
        </div>
        )
    };
}

//const FinalFour = () => {
//    return(
//        <div>
//            <Matchup/>
//            <Matchup/>
//            <Matchup/>
//        </div>
//        )
//};
//
//const render = () => {
//    ReactDOM.render(
//        <FinalFour/>
//    )
//};
//
//render();