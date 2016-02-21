import React from 'react';

import Groups from '../group/Group';

export default class Matchup extends React.Component {
    constructor(props) {
        super(props);
        console.log('pairing', props.pairing);
        this.styles = {
            container: {}
        }
    }
    renderMatchup(pairingA, pairingB) {
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



