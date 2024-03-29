//import React from 'react';
//import ReactDOM from 'react-dom';

var React = require('react');

import Comment from './comment';

export default class CommentList extends React.Component {
    render(){
        var commentNodes= this.props.data.map(function(comment) {
            return(
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
            </Comment>
            )
        })
        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        )
    }
}