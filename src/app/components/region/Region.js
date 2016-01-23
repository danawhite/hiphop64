import {Component, PropTypes} from 'react';

import Group from '../group/Group';
import Regions from '../models/Regions'

export default class Region extends Component {
    constructor(props) {
        super(props);
    }

    renderMatchupsForRegion(region, groupB) {

    }

    render() {
        return (
            <div>{this.matchups.map((matchup) => {
                return(
                    <div>{this.renderMatchups}</div>
                )
            })}</div>
        )
    }
}