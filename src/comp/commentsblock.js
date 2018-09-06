import React from 'react';

class CommentsBlock extends React.Component {

  constructor() {
    super();
    this.state = {
    showReply: false
    }
  }
  
  showComments(e) {
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

  render() {
  	return(
  		<div className="comments-block info-block__comments-block"  > 
          <span onClick={this.showComments.bind(this)}   className="comments-title comments-block__comments-title">
            {this.state.showReply && <span>Скрыть комментарии</span> || 
            <span>Посмотреть все комментарии ({this.props.commAmount}) </span> 
            }
          </span>    

          <div className="all-comments comments-block__all-comments">
            {this.state.showReply  && 
            <div>
              {this.props.allComments.slice(0,this.props.commAmount-4)}
            </div>
            }
            {this.props.allComments.slice(-4,this.props.commAmount)}
          </div>   
      </div>
    );
  }
}

export default CommentsBlock;
