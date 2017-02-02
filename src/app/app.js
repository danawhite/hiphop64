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
        
    }
    componentWillMount() {
        var ref = new Firebase('http://hiphop64.firebaseio.com');

        ref.set({name: 'Dana White'});
    }
    render() {
        return  (
            <div style={style.outer}>
                <div style={style.container}>
                    <div style={style.quarterfinals}>Quarterfinals
                        <div style={style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={style.semifinals}>Semifinals
                        <div style={style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={style.finals}>Finals
                        <div style={style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={style.semifinals}>Semifinals
                        <div style={style.region}>Next</div>
                        <div>{this.teams.map( team => {
                            return (
                                <div>
                                    <Matchup/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div style={style.quarterfinals}>Quarterfinals
                        <div style={style.region}>Next</div>
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
                <div style={style.quarterfinals}>Quarterfinals
                    <div style={style.region}>Next</div>
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

const style = {
    outer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
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