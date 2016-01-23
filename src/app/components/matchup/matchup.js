import React from 'react';

import Group from '../group/Group';

export default class Matchup extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            container: {}
        }
    }

    renderMatchup(groupA, groupB) {
        let matchupNodeA = new Group(groupA);
        let matchupNodeB = new Group(groupB);

        return [matchupNodeA, matchupNodeB];
    }

    render() {
        return (
            <div style={this.styles.container}>
                <Group name="Kentucky" seed="1"/>
                <Group name="UConn" seed="16"/>
            </div>
        )
    }
}

Matchup.propTypes = {
    name: React.PropTypes.string.isRequired
};

Matchup.defaultProps = { name: "Group", seed: "2"};



