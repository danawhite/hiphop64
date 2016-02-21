import React from 'react';
import ReactDOM from 'react-dom';

import Pairings from '../../models/pairings';
import Matchup from '../matchup/matchup';
import Rounds from '../../models/Rounds';

export default class Region extends React.Component {
    constructor(props) {
        super(props);
        console.log('Region ', props);
        this.style = {
            container: {
                backgroundColor: 'blue',
                marginBottom: 10
            }
        };
    }

    renderMatchupsFromPairing() {}
    // render lanes
    // render matchupsForLanes (generators)
    createMatchupFromGroups(group) {
        return groups
            .filter(group => group.region === this.props.region)
            .map(group => {
                //pairi
            })
    }

    getGroupsForPairing(pairing) {
        return this.props.groups
            .filter(group => group.region === this.props.region)
            .map(group => {
                pairing.forEach(number => {
                    // TODO change seeds from strings to numbers and add default propTypes
                    if(group.seed == number) {
                        console.log(group);
                    }
                })
            })
    }

    render() {
        return (
            <section style={this.style.container}>
                {Pairings.map( pairing => {
                    return (
                        <Matchup pairing={pairing}
                                 groups={this.getGroupsForPairing(pairing)}/>
                    )
            })}
            </section>
        )
    }
}

const createMatchups = (pairings, groups) => {
    pairings
        .map(pairing => {
            pairing
                .forEach((item, index) => {
                    console.log(item);
                    groups
                        .filter(group => group.seed === item)
                        .map(group => {
                            console.log(pairing);
                            console.log(group);
                });
        });
})};

