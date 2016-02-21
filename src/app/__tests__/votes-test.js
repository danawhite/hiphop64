// __tests__/Region.js
jest.dontMock('../reducers/votes');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const votes = require('../reducers/votes');

xdescribe('Votes', () => {
    let stateBefore;

    beforeEach(() => {
        stateBefore = [
            {
                groupName: 'Onyx',
                numVotes: 1
            }
        ];
    });

    //it('should increment vote count', () => {
    //    const action = {
    //        type: 'ADD_VOTE',
    //        groupName: 'Onyx'
    //    };
    //
    //    //votes(stateBefore, action);
    //
    //    const stateAfter = [
    //        {
    //            groupName: 'Onyx',
    //            numVotes: 2
    //        }
    //    ];
    //
    //    expect(votes).not.toBeDefined();
    //    //expect(stateBefore).toEqual(stateAfter);
    //});
    //
    //it('should decrement vote count', () => {
    //    const action = {
    //        type: 'REMOVE_VOTE',
    //        groupName: 'Onyx'
    //    };
    //
    //    const stateAfter = [
    //        {
    //            groupName: 'Onyx',
    //            numVotes: 0
    //        }
    //    ];
    //
    //    //votes(stateBefore, action);
    //
    //
    //    expect(
    //        votes(stateBefore, action)
    //    ).toEqual(stateAfter);
    //})
});