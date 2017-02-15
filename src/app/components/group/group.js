import React from 'react';

const Group = ({ seed, name, onSelected }) => (
    <div style={style.container} onClick={onSelected}>
        <p style={style.nodes}>{seed}</p>
        <p style={style.nodes}>{name}</p>
        <input type="checkbox" style={style.checkbox}/>
    </div>
);

const style = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid gray',
        width: 180,
        height: 25,
        cursor: 'pointer',
        borderRadius: 2,
    },
    nodes: {
        display: 'inline',
        paddingLeft: 5,
        paddingRight: 10
    },
    checkbox: {
        align: 'right'
    }
};

Group.propTypes = {
    seed: React.PropTypes
       .oneOfType([
           React.PropTypes.string,
           React.PropTypes.number
       ]),
    name: React.PropTypes.string
};

Group.defaultProps = {
    name: 'Group',
    seed: '16'
};

export default Group;

