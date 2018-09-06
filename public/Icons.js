import React from 'react';

class Icons extends React.Component {

  render() {
	return(
		<div className="comment" key={this.props.key}>
			<span className="icons" >
				<i className="far fa-heart like" onClick={this.props.onClick}></i>
			</span>
			<i className="far fa-comment comment" ></i>
			<p className = "likes">{this.props.likes} отметок "Мне нравится" </p>
		</div>
    );
  }
}


export default Icons;
