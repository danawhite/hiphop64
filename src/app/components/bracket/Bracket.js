import React, {Component} from 'react';

import Region from '../region/region';
import RegionContainer from '../region-container/region-container';
import {regions} from '../../models/data-models';
import Groups from '../../models/groups';
import FinalFour from '../final-four/final-four';
import regionSequence from '../../models/regionSequence';

//const {createStore} = Redux;

class Bracket extends Component {
    constructor(props){
        super(props);
        
        this.getPairingsForRegion = this.getPairingsForRegion.bind(this);
    }

    getPairingsForRegion(groups, region) {
        return groups
            .filter(group => group.region === region)
            .map( group => group );
    }

    render() {
        return (
            <div style={styles.bracket}>
                {regionSequence.map((region, index) => (
                   <RegionContainer key={index}
                                    style={styles.upperRight}/>
                ))}
            </div>
        )
    }
}

const styles = {
    bracket: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
        margin: 10
    },
    upperRight: {
        // flex: .2,
        // flexDirection: 'row',
        // // justifyContent: 'flex-start',
        // backgroundColor: 'green',
        // // height: 400,
        // width: 400,
        // // margin: 10
    },
    upperLeft: {},
    bracketUpper: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'orange'
    },
    bracketMiddle: {
        flex: 1,
        backgroundColor: 'purple'
    },
    bracketLower: {
        // display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'aqua'
    },
    region: {
        backgroundColor: 'green'
    }
};

Bracket.propTypes = {
    field: React.PropTypes.array
};

export default Bracket;