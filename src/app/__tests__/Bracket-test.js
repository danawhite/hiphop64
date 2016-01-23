jest.dontMock('../components/bracket/Brakcet');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Bracket = require('../components/bracket/Bracket').default;

let bracket;
let bracketNode;

describe('Bracket', () => {

    it('should be defined', () => {
        bracket = TestUtils.renderIntoDocument(
            <Bracket/>
        );

        bracketNode = ReactDOM.findDOMNode(bracket);

        expect(bracket).toBeDefined();
    })
 });