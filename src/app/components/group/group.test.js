import React from 'react';
import Group from './group';
import renderer from 'react-test-renderer';

describe('Group', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <Group name="Onyx" seed="14"/>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
});

//    it('should include a prop seed of type string', () => {
//        expect(group).not.toBeDefined();
//    });
//
//    it('should send GROUP_SELECTED action when clicked', () => {
//        TestUtils.Simulate.click(
//            TestUtils.findRenderedDOMComponentWithTag(group, 'div')
//        );
//    })

