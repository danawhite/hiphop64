import {combineReducers} from 'redux';
import createMatchups from './createMatchups';

const rootReducer = combineReducers({
    createMatchups,
    tallyVotes
});

export default rootReducer;