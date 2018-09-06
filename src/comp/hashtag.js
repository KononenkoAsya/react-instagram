import React from 'react';

class Hashtag extends React.Component {

  render() {
	return(
		<div className="hashtag-block info-block___hashtag"  > 
			<span className="hashtag-name hashtag-block__hashtag-name"> {this.props.hashtag_name} </span> 
			<span className="hashtag-text hashtag-block__hashtag-text"> {this.props.hashtag_text} </span>
		</div>	
    );
  }
}
export default Hashtag;
