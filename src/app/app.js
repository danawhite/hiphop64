import React from 'react';
import Firebase from 'firebase';

import Team from './components/matchup-node/MatchupNode';
import Matchup from './components/matchup/matchup';

export default class Bracket extends React.Component {
    constructor(props) {
        super(props);

        this.teams = [
            {
                name: 'Kentucky',
                seed: 1,
                region: 'East'
            },
            {
                name: 'Maryland',
                seed: 16,
                region: 'West'
            },
            {
                name: 'Kentucky',
                seed: 1
            },
            {
                name: 'Maryland',
                seed: 16
            },
            {
                name: 'Kentucky',
                seed: 1
            },
            {
                name: 'Maryland',
                seed: 16
            },
            {
                name: 'Kentucky',
                seed: 1
            },
            {
                name: 'Maryland',
                seed: 16
            },
            {
                name: 'Kentucky',
                seed: 1
            },
            {
                name: 'Maryland',
                seed: 16
            },
            {
                name: 'Kentucky',
                seed: 1
            },
            {
                name: 'Maryland',
                seed: 16
            }
        ];

        this.style = {
            outer: {
              display: 'flex',
                flexDirection: 'column',
                aligItems: 'stretch'
            },
            container: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'spaceBetween'
            },
            quarterfinals: {
                flex: .2,
                flexDirection: 'column',
                alignItems: 'stretch',
                backgroundColor: 'grey',
                color: '#333'
            },
            semifinals: {
                flex: .15,
                flexDirection: 'column',
                backgroundColor: 'grey',
                color: '#333'
            },
            finals: {
                flex: .3,
                flexDirection: 'column',
                backgroundColor: 'grey',
                color: '#333'
            },
            region: {
                alignSelf: 'stretch',
                flexDirection: 'column',
                //flex: .2,
                backgroundColor: '#ffdd00'
            }
        }
    }
    componentWillMount() {
        var ref = new Firebase('http://hiphop64.firebaseio.com');

        ref.set({name: 'Dana White'});
    }
    render() {
        return  (
            <div style={this.style.outer}>
                <div style={this.style.container}>
                    <div style={this.style.quarterfinals}>Quarterfinals
                        <div style={this.style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={this.style.semifinals}>Semifinals
                        <div style={this.style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={this.style.finals}>Finals
                        <div style={this.style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={this.style.semifinals}>Semifinals
                        <div style={this.style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={this.style.quarterfinals}>Quarterfinals
                        <div style={this.style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div style={this.style.quarterfinals}>Quarterfinals
                    <div style={this.style.region}>Next</div>
                    <div>{this.teams.map( team => {
                        return (
                            <div>
                                <Matchup/>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}