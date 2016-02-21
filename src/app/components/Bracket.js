import React, {Component} from 'react';

import Regions from '../models/Regions';
import Region from './region/region';
import Groups from '../models/groups';

class Bracket extends Component {
    constructor(props){
        super(props);

        this.regions = ['East', 'Midwest', 'South', 'West'];
        this.getGroupsForRegion = this.getGroupsForRegion.bind(this);
        console.log(this);

    }

    getGroupsForRegion(groups, region) {
        return groups
            .filter(group => group.region === region)
            .map( group => group );
    }

    render() {
        return (
            <div>
                {this.regions.map(region => {
                    return (
                        <Region
                            key={region}
                            region={region}
                            groups={this.getGroupsForRegion(Groups, region)}
                        />
                    )
                })}
            </div>
        )
    }
}

Bracket.propTypes = {};

export default Bracket;