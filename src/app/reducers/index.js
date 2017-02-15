import { combineReducers } from 'redux';

import matchups from './matchups';
import votes from './votes';
import tallyVotes from './tallyVotes';

const bracketApp = combineReducers({
    matchups,
    votes,
    tallyVotes
});

export default bracketApp;