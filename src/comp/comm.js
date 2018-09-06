import React from 'react';
import {connect} from 'react-redux';

class Comm extends React.Component {

  submitForm(e) {
      e.preventDefault();
      console.log(this.googleInput.value);
      this.props.Comm(this.googleInput.value);
      this.googleInput.value = '';
  }

  render() {
		return(
		  <div className="comments-block"> 
        <input className="add-comment" ref={(googleInput) => { this.googleInput = googleInput }} placeholder='write here'/>
        <button type="button" onClick={this.submitForm.bind(this)}>Login</button>
			</div>
    );
  }
}

export default Comm;
