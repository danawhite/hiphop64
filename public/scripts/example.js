var ReactDOM = require('react-dom');

var CommentBox = require('../components/comment-box');

//var data = [
//    {id: 1, author: 'Dana White', comment: 'One comment'},
//    {id: 1, author: 'Chelsea Burrell', comment: 'Another comment'},
//]

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000}/>, document.getElementById('content')
);