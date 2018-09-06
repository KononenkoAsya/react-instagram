import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCount} from '../actions/countlikes';
import {newComment} from '../actions/addcomment';

import Profile from '../comp/profile';
import Comments from '../comp/сomments';
import Icon from '../comp/icons';
import Hashtag from '../comp/hashtag';
import NewComment from '../comp/newcomment';
import CommentsBlock from '../comp/commentsblock';
import Image from '../comp/image';


class Page extends React.Component {

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

	post() {
		return this.props.users.map((user,index) =>{

			const cb = this.props.comments.filter((comm) => comm.postId === user.postId).map((comm,index) => {
				return (
					<Comments comment_user={comm.user} comment_text={comm.comment} key={index} />

				);
			});

			return  (

				<div className = "info-block" key={index}> 

					<Profile profile_image={user.profile} profile_name={user.name} />

					<Image img = {user.url} />

					<Icon likes={user.likes} color={user.color} onClick={()=>this.props.updateCount(user)}/>

					<Hashtag hashtag_name = {user.name} hashtag_text = {user.hashtag} />

					<CommentsBlock  commAmount={cb.length} allComments={cb}/>

					<NewComment newComment={this.props.newComment}  postId={user.postId}/>

				</div>
			);
		});
	}

  	render() {
		return(
		<div className="all-blocks"> 
			{this.post()}
		</div>
    );
  }
}

const mapStateToProps = state => ({
	users: state.users,
	comments: state.comments
})

function mapDispatchToProps (dispatch) {
	return	bindActionCreators({newComment:newComment, updateCount:updateCount},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
