const matchups = (state = [], action) => {
    switch(action.type) {
        case 'ADD_MATCHUP':
            return {
                id: action.id,
                data: {}
            }
        default:
            return state
    }
};

export default matchups;