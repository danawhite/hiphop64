jest.dontMock('../components/group-checkbox/GroupCheckbox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const GroupCheckbox = require('../components/group-checkbox/GroupCheckbox').default;

xdescribe('GroupCheckbox', () => {
    it('changes isChecked to true when selected', () => {
        let checkbox = TestUtils.renderIntoDocument(
            <GroupCheckbox/>
        );

        let checkboxNode = ReactDOM.findDOMNode(checkbox);

        expect(checkboxNode.checked).toEqual(false);

        TestUtils.Simulate.change(
            TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
        );

        expect(checkboxNode.checked).toEqual(true);
    })
});