//jest.dontMock('../components/region/region');
//
import React from 'react';
import Region from './region';
import renderer from 'react-test-renderer';

describe('Region', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <Region name="Onyx" position="left" seed="14"/>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
});

//import ReactDOM from 'react-dom';
//import TestUtils from 'react-addons-test-utils';
//
//const Region = require('../components/region/region').default;
//
//describe('Bracket', () => {
//    let region;
//    let regionNode;
//
//    it('should be defined', () => {
//        region = TestUtils.renderIntoDocument(
//            <Region/>
//        );
//
//        regionNode = ReactDOM.findDOMNode(region);
//
//        expect(region).toBeDefined();
//    });
//
//    it('should render 2 lanes', () => {
//        region.renderLanes();
//
//        expect()
//    })
//
//});