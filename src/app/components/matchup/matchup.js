import React from 'react';

import Group from '../group/group';
import {regionals}  from '../../models/rounds';
import uuid from 'node-uuid';

export default class Matchup extends React.Component {
    constructor(props) {
        super(props);
        console.log('Matchup', props);

        this.state = {
            selected: null

        };
        this.styles = {
            container: {
                paddingTop: 5,
                paddingBottom: 5
            },
            firstRound: {
                width: 300,
                backgroundColor: 'cornsilk'
            },
            secondRound: {
                width: 500,
                backgroundColor: 'purple'
            }
        };

        this.renderMatchupWithGroups = this.renderMatchupWithGroups.bind(this);
        this.renderDefaultMatchup = this.renderDefaultMatchup.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, props) {
        //console.log(event);
        //console.log(props);
    }

    renderMatchupWithGroups(matchup) {
        return matchup.map(group => {
            return (
                <Group  key={group.name}
                        name={group.name}
                        seed={group.seed}
                        style={this.styles.firstRound}
                />
            )
        })
    };

    renderDefaultMatchup() {
        return (
            <div>
                <Group style={this.styles.secondRound}/>
                <Group style={this.styles.secondRound}/>
            </div>
        )
    }

    render() {
        return (
            <div style={this.styles.container}>
                {this.props.matchup
                    ? this.renderMatchupWithGroups(this.props.matchup)
                    : this.renderDefaultMatchup()
                }
            </div>
        )
    }
}

Matchup.propTypes = {
    matchup: React.PropTypes.array
};

Matchup.defaultProps = {};



