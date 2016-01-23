//__tests__/Matchup_test.js
jest.dontMock('../components/matchup/Matchup');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Group from '../components/group/Group';

const Matchup = require('../components/matchup/Matchup').default;

describe('Group', () => {
    let matchup;
    let matchupNode;
    //let

    beforeEach(() => {
        matchup = TestUtils.renderIntoDocument(
            <Matchup/>
        );

        matchupNode = ReactDOM.findDOMNode(matchup);
    });

    it('should be defined', () => {
        expect(matchupNode).toBeDefined();
    });

    it('should create a matchup which consists of 2 group inputs', () => {
        const Group = TestUtils.renderIntoDocument(
            <Group/>
        );
        let matchupA = new Group();
        let matchupB = new Group();

        matchup.renderMatchup(matchupA, matchupB);

        expect(matchup.groups.length).toEqual(2);
    })

});