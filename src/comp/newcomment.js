import React from 'react';

class NewComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  sendComments() {
  	if(this.state.inputValue !== ''){
      this.props.newComment({
      postId: this.props.postId,
      comment: this.state.inputValue
      })
    }
  }

  updateInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
  	return(
  		<div className="add-comment info-block__add-comment"  > 
  			<input type="text" value={this.state.inputValue} onChange={e => this.updateInput(e)} className="input-comment add-comment__input-comment " placeholder="Добавьте комментарий..."/>
             	<i className="fas fa-ellipsis-h send" onClick={this.sendComments.bind(this)}></i>
  		</div>	
    );
  }
}

export default NewComment;
