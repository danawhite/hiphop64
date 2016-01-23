//__tests__/team_test.js
jest.dontMock('../components/group/Group');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Group = require('../components/group/Group').default;

describe('Group', () => {
    let group, groupNode;

    beforeEach(() => {
        group = TestUtils.renderIntoDocument(
            <Group seed="2" name="Maryland" />
        );

        groupNode = ReactDOM.findDOMNode(group);
    });

    it('should have a seed property', () => {
        expect(groupNode).toBeDefined();
    });

    it('should have a seed property', () => {
        expect(group.props.seed).toBeDefined();
    });

    it('should have a name property', () => {

    })
});