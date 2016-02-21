// __tests__/Region.js
jest.dontMock('../components/region/region');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Region = require('../components/region/region').default;

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
    //

    it('should render matchups with the appropriate style', () => {
        let groups = [
            {
                groupName: 'NWA',
                region: 'West',
                seed: 1
            },
            {
                groupName: 'ATCQ',
                region: 'East',
                seed: 2
            },
            {
                groupName: 'PRT',
                region: 'East',
                seed: 12
            },
            {
                groupName: 'EPMD',
                region: 'East',
                seed: 6
            }
        ];
        let style = 'sweetSixteen';
        region.createMatchupsFromGRoups(groups);

        expect(r).toEqual('East');
    })
});