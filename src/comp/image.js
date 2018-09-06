import React from 'react';

class Profile extends React.Component {

  	render() {
		return(
			<div className = "insta-image-block info-block__insta-image-block" >
				<img className = "insta-image image-block__insta-insta-image"  src = {this.props.img} />
			</div>
    	);
  	}
}

export default Profile;
