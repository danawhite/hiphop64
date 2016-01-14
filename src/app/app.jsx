import React from 'react';

import Team from './components/team';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.teams = [
            {
                name: 'Kentucky',
                seed: 2
            },
            {
                name: 'Maryland',
                seed: 3
            }
        ]

        this.style = {
            container: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'spaceBetween',
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
                backgroundColor: 'blue',
                color: '#333'
            },
            finals: {
                flex: .3,
                flexDirection: 'column',
                backgroundColor: 'cornsilk',
                color: '#333'
            },
            region: {
                alignSelf: 'stretch',
                flexDirection: 'column',
                flex: 1,
                backgroundColor: '#ffdd00'
            }
        }
    }
    render() {
        return  (
            <div>
                <div style={this.style.container}>
                    <div style={this.style.quarterfinals}>Quarterfinals
                        <div style={this.style.region}>Next</div>
                    </div>
                    <div style={this.style.semifinals}>Semifinals
                        <div style={this.style.region}>Next</div>
                    </div>
                    <div style={this.style.finals}>Finals
                        <div style={this.style.region}>Next</div>
                    </div>
                    <div style={this.style.semifinals}>Semifinals
                        <div style={this.style.region}>Next</div>
                    </div>
                    <div style={this.style.quarterfinals}>Quarterfinals
                        <div style={this.style.region}>{this.teams.map( team => {
                            return (
                                <Team name={team.name} seed={team.seed}/>
                            )
                        })}</div>
                    </div>
                </div>
            </div>
        )
    }
}