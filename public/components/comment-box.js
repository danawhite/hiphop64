//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';

var React = require('react');
var uuid = require('node-uuid');
var $ = require('jquery');

var CommentList = require('./comment-list');
var CommentForm = require('./comment-form');

//var data = [
//    {id: 1, author: 'Dana White', comment: 'One comment'},
//    {id: 1, author: 'Chelsea Burrell', comment: 'Another comment'},
//]

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.data = [];
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    }
    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        })
    }
    handleCommentSubmit(comment) {
        var comments = this.state.data;
        comment.id = uuid.v4();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            data: comment,
            success: function(data) {
                this.setState({data})
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, xhr, err);
                this.setState({data: comments})
            }.bind(this)
        })
    }
    render() {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
}

//ReactDOM.render(
//    <CommentBox url="/api/comments" pollInterval={2000}/>, document.getElementById('content')
//);