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
                <div style={style.container}>
                    {regions.map(region => {
                        return (
                            <Region
                                key={region.name}
                                region={region.name}
                                groups={this.getGroupsForRegion(Groups, region.name)}
                                style={style.region}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const style = {
    bracket: {
        color: 'white'
    },
    container: {},
    region: {}
};

Bracket.propTypes = {
    field: React.PropTypes.array
};

export default Bracket;