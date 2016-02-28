import React from 'react';
import uuid from 'node-uuid';

import Pairings from '../../models/pairings';
import Matchup from '../matchup/matchup';
import Regions from '../../models/regions';
import Regional from '../regional/regional';
import FinalFour from '../final-four/final-four';
import { firstRound, regionals, finalFour} from '../../models/rounds';
import RegionStyles from './Stylesheet.js'

export default class Region extends React.Component {
    constructor(props) {
        super(props);
        console.log('Region ', props);
        this.style = RegionStyles;

        this.state = {
            groups: props.groups,
            matchups: []
        };

        this.matchups = [];

        this.getMatchupsFromPairings = this.getMatchupsFromPairings.bind(this);
        this.createMatchups = this.createMatchups.bind(this);
        this.setSelectedGroup = this.setSelectedGroup.bind(this);
        this.renderRegions = this.renderRegions.bind(this);
        this.renderFinalFour = this.renderFinalFour.bind(this);

        this.getMatchupsFromPairings(Pairings);
    }

    componentDidMount() {
        //this.r.style.backgroundColor = 'indianred';
    }

    getMatchupsFromPairings(pairings) {
        //console.log(pairings);
        return pairings.reduce(this.createMatchups, []);
    }

    createMatchups(matchups, pairing) {
        let matchup = [];

        pairing.forEach(seed => {
            this.state.groups
                .filter(group => {
                    return group.seed == seed;
                })
                .map(group => {
                    matchup.push(group);
                    //console.log(group, matchup);
                });
        });

        this.matchups.push(matchup);

        //console.log(this.matchups);

        return matchups;
    };

    setSelectedGroup(matchup) {
        console.log(`onSelectedGroup ${matchup}`);
    }

    renderRegions() {
        console.log('renderRegions');
        return Regions
            .filter(region => region !== 'FinalFour' && region === this.props.region)
            .map(region => {
                console.log(`renderRegions: region ${region}`);
                return (
                    <div>
                        <div ref={ ref => this.firstLane = ref }
                             style={this.style.firstLane}>
                            {this.matchups.map(matchup => {
                                return(
                                    <Matchup key={uuid.v4()}
                                             selected={null}
                                             matchup={matchup}
                                    />
                                )
                            })}
                        </div>
                        <div ref={ ref => this.secondLane = ref }
                             style={this.style.secondLane}>
                            {regionals.map(round => {
                                return (
                                    <Matchup key={uuid.v4()}
                                             name="default"
                                             selected={null}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )
            });

    }

    renderFinalFour() {
        console.log('renderFinalFour');
        return (
            <div>
                <FinalFour/>
            </div>
        )
    }

    // matchup[group] = selected

    render() {
        return (
            <div style={this.style.container}>
                {this.props.groups.length
                    ? this.renderRegions()
                    : this.renderFinalFour()
                }
            </div>
        )
    }
}

