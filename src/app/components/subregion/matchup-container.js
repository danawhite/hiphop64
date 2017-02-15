import React from 'react';
import { connect } from 'react-redux';

import Matchup from '../matchup/matchup';

// const MatchupContainer = ({position, regionStyle, round, onSelect, groups}) => (
//     <div style={[styles.container, regionStyle]}>
//         <div style={styles.upperRegion}>
//             <div>{position}</div>
//             <Matchup/>
//             <Matchup/>
//         </div>
//     </div>
// );

const matchStateToProps = (state) => {
    return {}
};

const matchDispatchToProps = (dispatch) => {
    return {}
};

const MatchupContainer = connect(
    matchStateToProps,
    matchDispatchToProps
)(Matchup);

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    upperRegion: {
        backgroundColor: 'indigo'
    }
};

export default MatchupContainer;