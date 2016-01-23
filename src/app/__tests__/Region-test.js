// __tests__/Region.js
jest.dontMock('../components/region/Region');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Region = require('../components/region/Region');

describe('Region', () => {
    let region;
    let regionNode;

    it('should be defined', () => {
        region = TestUtils.renderIntoDocument(
            <Region/>
        );

        regionNode = ReactDOM.findDOMNode(region);

        expect(regionNode).toBeDefined();
    });
});