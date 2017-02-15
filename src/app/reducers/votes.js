const votes = (state = [], action) => {
    switch(action.type) {
       case 'ADD_VOTE':
           return [
               ...state,
               {
                   groupName: action.groupName,
                   round: action.round,
                   numVotes: this[action.groupName].numVotes++
               }
           ];
       case 'REMOVE_VOTE':
           return [
               ...state,
               {
                   groupName: action.groupName,
                   round: action.round,
                   numVotes: this[action.groupName].numVotes--
               }
           ]
        default:
            return state
    }
};

export default votes;