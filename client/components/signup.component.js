import React, { Component } from 'react'; 
import SignupForm from './signup.form' ;
import { connect } from 'react-redux'; 
import { userSignupRequest } from './../actions/signup.actions';

class SignupComponent extends Component{
    
    render(){
        const { userSignupRequest } = this.props;
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up</h2>
                    <SignupForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        )
    }
}


SignupComponent.protoTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupComponent)