export const MARGIN = 20;
export const VIEW_HEIGHT = 54;


const styles = {
    container: {
        // flex: 1,
        display: 'flex',
        // flexDirection: 'row',
        marginBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
    },
    rounds: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'steelblue',
        margin: 10,
        padding: 10
    },
    firstLane: {
        // display: 'inline-block',
        // backgroundColor: 'red',
        marginRight: 10,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5
    },
    secondLane: {
        flexDirection: 'row',
        // display: 'inline-block',
        // backgroundColor: 'green',
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5
    },
    baseRegion: {
        // flex: .5
    },
    east: {
        height: 20
    },
    firstRound: {
        // flexDirection: 'column',
        justifyContent: 'space-between'
    },
    secondRound: {
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        marginTop: VIEW_HEIGHT / 2,
        marginBottom: VIEW_HEIGHT / 2
    },
    sweetSixteen: {
        // flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: VIEW_HEIGHT * 2 + (MARGIN - 5),
        marginBottom: VIEW_HEIGHT * 2 + (MARGIN - 5)
    },
    eliteEight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    finalFour: {},
    championship: {},
};

const thirtyTwo = {
  // width: 4000
};

export { styles, thirtyTwo };