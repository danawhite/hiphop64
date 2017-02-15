import React from 'react';

import Subregion from '../subregion/matchup-container';

const renderSubregionsForRound = (round) => {

};

const Round = ({round}) => (
    <div>
        {/*{round.map(subregion => (
            <Subregion
                key={subregion}
                position={subregion}
                style={styles.subregion}
            />
        ))}*/}
    </div>
);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 20,
        backgroundColor: 'gray'
    },
    subregion: {
        marginBottom: 10,

    }
};

export default Round;