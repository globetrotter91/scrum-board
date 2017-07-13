import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import FormField from './common/form.field' ;

export default class LoginForm extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    onSubmit(e){
        e.preventDefault() ;
        console.log(this.state) ;
    }
    render(){
        
        const linksWithSignInButton = <Link to='/forgot-password' className="btn btn-link">Forgot Password</Link>  ;
        return (
            <form onSubmit={this.onSubmit}>
   
                <FormField 
                    label='Email' 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                    required='required'/>

                <FormField 
                    label='Password' 
                    type='password' 
                    name='password'
                    value={this.state.password} 
                    onChange={this.onChange}
                    required='required'/>
                 
                <FormField 
                    label='Sign In' 
                    type='button'
                    btnClass='btn-primary'
                    links={linksWithSignInButton}
                    />
            </form>
        );
    }
}