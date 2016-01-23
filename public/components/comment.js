//import React from 'react';
//import marked from 'marked';
var React = require('react');
var marked = require('marked');

export default class Comment extends React.Component {
    constructor(props){
        super(props)
    }
    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

        return {__html: rawMarkup}

    }
    render(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={marked(this.rawMarkup())}/>
            </div>
        )
    }
}