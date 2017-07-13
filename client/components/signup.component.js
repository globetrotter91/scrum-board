import React, { Component } from 'react'; 
import SignupForm from './signup.form' ;

export default class SignupComponent extends Component{
    
    render(){
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Register</h2>
                    <SignupForm />
                </div>
            </div>
        )
    }
}