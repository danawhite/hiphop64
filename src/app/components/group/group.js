import React from 'react';

import GroupCheckbox from '../group-checkbox/GroupCheckbox';

export default class Group extends React.Component {
    constructor(props){
        super(props);
        //console.log(this);

        this.setSelectedGroup = this.setSelectedGroup.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    setSelectedGroup(props) {
        console.log(props);
    }

    handleClick(props) {
        this.props.onSelected(this.props);
    }

    render() {
        return (
            <div style={style.container} onClick={this.handleClick}>
                <p style={style.nodes}>{this.props.seed}</p>
                <p style={style.nodes}>{this.props.name}</p>
                <input type="checkbox" style={style.checkbox}/>
            </div>
        )
    }
}

const style = {
    container: {
        backgroundColor: '#ffdd00',
        display: 'block',
        border: '1px solid green',
        width: 180,
        height: 25,
        verticalAlign: 'center',
        cursor: 'pointer'
    },
    nodes: {
        display: 'inline',
        paddingLeft: 5,
        paddingRight: 10
    },
    checkbox: {
        alignSelf: 'flex-end'
    }
};

Group.propTypes = {
    //seed: React.PropTypes
    //    .oneOfType([
    //        React.propTypes.string,
    //        React.propTypes.number
    //    ]),
    //name: React.PropTypes.string
};

Group.defaultProps = {};
