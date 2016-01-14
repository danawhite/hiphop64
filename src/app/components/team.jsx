import React from 'react';

export default class Team extends React.Component {
    constructor(props){
        super(props);

        this.style = {
            container: {
                backgroundColor: '#fafafa',
                display: 'flex',
                border: '2px solid green'
            }
        }
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