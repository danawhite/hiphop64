const tallyVotes = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_VOTES':
            return {
                id: action.id
            }
        default:
            return state
    }
};

export default tallyVotes;