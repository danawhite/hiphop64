import React from 'react';

import GroupCheckbox from '../group-checkbox/GroupCheckbox';

export default class Group extends React.Component {
    constructor(props){
        super(props);

        this.style = {
            container: {
                backgroundColor: '#fafafa',
                display: 'inline-block',
                border: '1px solid green',
                width: 200
            }
        }
    }
    setName(name) {
        this.name = name;
    }
    render() {
        return (
            <div style={this.style.container}>
                <div>{this.props.seed}</div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

Group.propTypes = {
    seed: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
};

Group.defaultProps = {};
