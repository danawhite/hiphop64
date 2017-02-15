import React from 'react';

import Pairings from '../../models/pairings';
import Matchup from '../matchup/matchup';
import Regions from '../../models/regions';
import Regional from '../regional/regional';
import FinalFour from '../final-four/final-four';
import { Rounds, regionals } from '../../models/rounds';
import { styles, thirtyTwo } from './Stylesheet.js';
import matchupSequence from '../../models/matchupSequence';
import Round from '../round/Round';

import { BRACKET_POSITION } from '../../common/constants';

const styleRight = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'yellow'
};

const styleLeft = {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'orange'
};

export default class Region extends React.Component {
    constructor(props) {
        super(props);
        console.log('Region ', props);

        this.state = {
            groups: props.groups || null,
            matchups: [],
            regionals: [],
            position: props.position || 'left'
        };

        this.matchups = [];
        this.regionals = [];

        this.getMatchupsFromPairings = this.getMatchupsFromPairings.bind(this);
        this.getMatchupFromMatchups = this.getMatchupFromMatchups.bind(this);
        this.createFirstRoundMatchups = this.createFirstRoundMatchups.bind(this);
        this.createRegionalMatchups = this.createRegionalMatchups.bind(this);
        this.setSelectedGroup = this.setSelectedGroup.bind(this);
        this.renderRegions = this.renderRegions.bind(this);
        this.renderFinalFour = this.renderFinalFour.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getKeyForMatchup = this.getKeyForMatchup.bind(this);

        // this.getRegionalMatchupsFromRounds(regionals);
    }

    componentWillMount() {
        // if(this.props.region !== 'Final Four') {
        //     this.getMatchupsFromPairings(Pairings)
        // };
    }

    componentDidMount() {
    }

    getMatchupsFromPairings(pairings) {
        return pairings.reduce(this.createFirstRoundMatchups, []);
    }

    createFirstRoundMatchups(matchups, pairing) {
        let matchup = [];

        pairing.forEach(seed => {
            this.state.groups
                .filter(group => {
                    return group.seed == seed;
                })
                .map(group => {
                    matchup.push(group);
                });
        });

        this.matchups.push(matchup);

        return matchups;
    };

    getRegionalMatchupsFromRounds(rounds) {
        console.log('getRegionalMatchupsFromRounds', rounds);
        return rounds.reduce(this.createRegionalMatchups, []);
    }

    createRegionalMatchups(matchups, regional) {
        console.log('createRegionalMatchups', matchups);
        regional.forEach(item => {
            this.regionals.push(item);
        });

        return matchups;
    }

    setSelectedGroup(matchup) {
        console.log("setSelectedGroup", matchup);
    }

    getKeyForMatchup(round, index) {
        console.log(`getKeyForMatchups, ${this.props.region}.${round}`);
        return `${this.props.region}.${round}.${index}`
    }

    getMatchupFromMatchups(matchups, region, round) {
        let matchupIndex = round.charAt(round.length -1 );
        console.log(`matchupIndex: ${matchupIndex}`);
        return matchups
            .filter((matchup, index) => matchupIndex == index )[0]
    }

    renderRegions() {
        return Regions
            .filter(region => region !== 'FinalFour' && region === this.props.region)
            .map(region => this.renderRegion(region));

    }

    renderRegion(region) {
        console.log('renderRegion', region);

    }

    renderFinalFour() {
        return (
            <FinalFour/>
        )
    }

    handleClick(event) {
        console.log(event);
    }

    render() {
        const {groups} = this.props;
        return (
            <div>
                {groups.length
                    ? this.renderRegions()
                    : this.renderFinalFour()
                }
            </div>
        )
    }
}

