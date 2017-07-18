import React, { Component } from 'react'; 
import SignupForm from './signup.form' ;
import { connect } from 'react-redux'; 
import { userSignupRequest } from './../actions/signup.actions';
import { addFlashMessage } from './../actions/flash.messages.actions';
import { createHashHistory } from 'history'

const history = createHashHistory();

class SignupComponent extends Component{
    
    render(){
        const { userSignupRequest, addFlashMessage, history } = this.props;
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up</h2>
                    <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} history={history}/>
                </div>
            </div>
        )
    }
}


SignupComponent.protoTypes = {
    userSignupRequest: React.PropTypes.func.isRequired, 
    addFlashMessage : React.PropTypes.func.isRequired, 
    history: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest , addFlashMessage, history })(SignupComponent)