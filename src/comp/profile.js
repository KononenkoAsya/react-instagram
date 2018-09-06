import React from 'react';

class Profile extends React.Component {

  	render() {
		return(
			<div className = "profile-block info-block__profile-block" >
				<div className = "image-block profile-block__image-block" >
					<img className = "profile-image image-block__profile-image" src = {this.props.profile_image} />
				</div>
				<div className = "name-block profile-block__name-block" >	
					<span className = "profile-name name-block__profile-name">{this.props.profile_name} </span>
				</div>
			</div>
    	);
  	}
}

export default Profile;
