// You will add code to this file
import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Comment.css";
import Comment from "./Comment";
import AddComment from "../AddComment/AddComment"

class CommentSection extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          comments: this.props.comments,
          commentText: ""
      }
  }

  //adds new comment and passes it up to App
  addNewCommment = (event, index)=>{
      event.preventDefault();
      const comment = this.state.commentText;
      this.props.updateComments(this.props.index,comment)
      this.setState({commentText: ""})
      
  }

  //handles state for AddComment in this component
  changeHandler= event=>{
      this.setState({[event.target.name]: event.target.value})
  }

  render() { 
      return ( 
          <div className="comment-section-container">
              <div className="comments">
                  {this.state.comments.map((comment,i)=>{
                  return <Comment key={i} username={comment.username} text={comment.text} />
                  })}
              </div>
              <p className="time-stamp">{this.props.timestamp}</p>
              <hr className="comment-divider"/>
              <AddComment 
                  addNewCommment={this.addNewCommment} 
                  changeHandler={this.changeHandler} 
                  commentText={this.state.commentText}
              />
          </div>
      );
  }
}

CommentSection.propTypes={
  comments: PropTypes.array
}

export default CommentSection;