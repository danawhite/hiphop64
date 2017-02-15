import React from 'react';
import ReactDOM from 'react-dom';
import Group from '../group/group';

const MARGIN_BOTTOM = 20;

export default class Matchup extends React.Component {
    constructor(props) {
        super(props);
        console.log('Matchup', props);

        this.state = {
            selected: null
        };

        this.renderMatchupWithGroups = this.renderMatchupWithGroups.bind(this);
        this.renderDefaultMatchup = this.renderDefaultMatchup.bind(this);
        this.onSelected = this.onSelected.bind(this);
    }

    componentDidMount() {
        this.getCoordinates();
    }

    onSelected(group) {
        console.log('onSelected: ${props}', group);
        this.setState({
            selected: group
        }, () => console.log(this.state));
    }

    renderMatchupWithGroups(matchup) {
        return matchup.map(group => {
            console.log('group', group);
            return (
                <Group  key={group.name}
                        name={group.name}
                        seed={group.seed}
                        style={styles.firstRound}
                        onSelected={this.onSelected}
                />
            )
        })
    };

    renderDefaultMatchup() {
        // render according to matchupSequence
        return (
            <div>
                <Group style={styles.secondRound}/>
                <Group style={styles.secondRound}/>
            </div>
        )
    }

    getCoordinates() {
        let domNode = ReactDOM.findDOMNode(this.match);
        this.setState({
            componentHeight: domNode.clientHeight
        });
    }

    render() {
        const { matchup } = this.props;

        return (
            <div style={{marginBottom: MARGIN_BOTTOM}} ref={ref => this.match = ref}>
                {matchup
                    ? this.renderMatchupWithGroups(matchup)
                    : this.renderDefaultMatchup()
                }
            </div>
        )
    }
}

const styles = {
    container: {
        paddingTop: 5,
        paddingBottom: 5
    },
    firstRound: {
        width: 300,
        backgroundColor: 'white',
        color: 'black'
    },
    secondRound: {
        width: 500,
        backgroundColor: 'yellow'
    },
    sweetSixteen: {},
    eliteEight: {},
    finalFour: {},
    championship: {},
};

Matchup.propTypes = {
    matchup: React.PropTypes.array,
    round: React.PropTypes.string
};

Matchup.defaultProps = {};



