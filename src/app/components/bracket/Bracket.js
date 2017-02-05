import React, {Component} from 'react';

import Region from './../region/region';
import {regions} from '../../models/data-models';
import Groups from '../../models/groups';
import FinalFour from '../final-four/final-four';

//const {createStore} = Redux;

class Bracket extends Component {
    constructor(props){
        super(props);
        this.getGroupsForRegion = this.getGroupsForRegion.bind(this);
    }

    getGroupsForRegion(groups, region) {
        return groups
            .filter(group => group.region === region)
            .map( group => group );
    }

    render() {
        return (
            <div style={style.bracket}>
                <div style={style.bracketLeft}>
                    <Region
                        region="East"
                        groups={this.getGroupsForRegion(Groups, 'East')}
                        style={style.region}
                    />
                    <Region
                        region="South"
                        groups={this.getGroupsForRegion(Groups, 'East')}
                        style={style.region}
                    />
                </div>
                <div style={style.bracketCenter}>
                    <Region
                        region="Final Four"
                        groups={this.getGroupsForRegion(Groups, 'Final Four')}
                        style={style.region}
                    />
                </div>
                <div style={style.bracketRight}>
                    <Region
                        region="Midwest"
                        groups={this.getGroupsForRegion(Groups, 'East')}
                        style={style.region}
                    />
                    <Region
                        region="West"
                        groups={this.getGroupsForRegion(Groups, 'East')}
                        style={style.region}
                    />
                </div>
            </div>
        )
    }
}

const style = {
    bracket: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'white',
    },
    container: {
        flex: 1,
    },
    bracketLeft: {

    },
    region: {}
};

Bracket.propTypes = {
    field: React.PropTypes.array
};

export default Bracket;