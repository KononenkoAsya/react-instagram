import React from 'react';

class Icon extends React.Component {

  render() {
	return(
		<div className="icons-block info-block__icons-block" key={this.props.key}>
			<span className="icon icons-block__icon" >
				<i className="far fa-heart like" onClick={this.props.onClick}></i>
			</span>
			<span className="icon icons-block__icon" >
				<i className="far fa-comment comment" ></i>
			</span>
			<p className = "likes icons-block__likes" >{this.props.likes} отметок "Мне нравится" </p>
		</div>
    );
  }
}

export default Icon;
