//import React from 'react';

var React = require('react');

export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            text: ''
        }
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value })
    }
    handleTextChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault(); // prevents browser's default action of submitting form
        var author = this.state.author.trim();
        var text = this.state.text.trim();

        if(!text || !author) {
            return;
        }

        //TODO: send request to server
        this.props.onCommentSubmit({author, text});
        this.setState({
            author: '',
            text: ''
        });
    }
    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    onChange={this.handleAuthorChange}/>
                <input
                    type="text"
                    placeholder="Type something.."
                    onChange={this.handleTextChange}/>
                <input type="Submit" value="Post"/>
            </form>
        )
    }
}