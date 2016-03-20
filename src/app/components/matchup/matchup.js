import React from 'react';

import Group from '../group/group';
import {regionals}  from '../../models/rounds';
import uuid from 'node-uuid';
import { thirtyTwo } from './matchup-styles';


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
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(group) {
        console.log('onSelected: ${props}', group);
        // dispatch redux action to update store
        this.setState({
            selected: group
        }, () => console.log(this.state));

        //this.props.onSelected(group);
    }

    renderMatchupWithGroups(matchup) {
        return matchup.map(group => {
            console.log('group', group);
            return (
                <Group  key={group.name}
                        name={group.name}
                        seed={group.seed}
                        style={this.styles.firstRound}
                        onSelected={this.onSelected}
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
    matchup: React.PropTypes.array,
    round: React.PropTypes.string
};

Matchup.defaultProps = {};



