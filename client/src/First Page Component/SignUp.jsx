import React from 'react';
import '../style/App.css';
import PropTypes from 'prop-types';
import PopSignUp from './popSignUp.js';

// Pop up Login component that will help the user to use our features
// we use modal react js method to enhance great eceperience for the user
// modal supported my prop types in order for the component to use functionality when you mount
class SignUp extends React.Component {
   constructor(props) {
       super(props)
   }

  render() {

    if(!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop1">
        <div className="Login">
          {this.props.children}
          <div className="footer1">
            <a id="btn1" onClick={this.props.onClose}>X
            </a>
            <div className="forLogin">
             <PopSignUp/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default SignUp;
