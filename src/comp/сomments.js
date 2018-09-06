import React from 'react';

class Comments extends React.Component {

  render() {
	return(
		<div className="comment all-comments__comment">
			<span className="comment-user comment__comment-user">{this.props.comment_user}</span>
			<span className="comment-text comment__comment-text">{this.props.comment_text}</span>
		</div>
    );
  }
}

export default Comments;
