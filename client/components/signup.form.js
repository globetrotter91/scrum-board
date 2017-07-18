import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import timezones from './../data/timezones';
import map from 'lodash/map';
import FormField from './common/form.field' ;
import validateInput from './../../server/shared/validations/signup'; 

export default class SignupForm extends Component{

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '', 
            timeZone: '', 
            errors: {}, 
            isLoading: false
        };
        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state) ; 
        if(!isValid){
            this.setState({ errors });
        }

        return isValid ;
    }
    onSubmit(e){
        e.preventDefault() ;
        if(this.isValid()){
            this.setState({ errors : {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                ()=>{},
                (err) => this.setState({
                    errors : err.response.data, 
                    isLoading: false 
                })
            );
        }
    }
    render(){
        const { errors } = this.state; 
        const timeZoneOptions = map(timezones, (val, key)=>
            <option key={val} value={val}>{key}</option>
        );
        const linksWithSignUpButton = <Link to='/login' className="btn btn-link">Login</Link> ;

        return (
            <form onSubmit={this.onSubmit}>
                <FormField 
                    label='Name' 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.onChange}
                    errors={this.state.errors.name}
                    />

                <FormField 
                    label='Email' 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                    required='required'
                    errors={this.state.errors.email}
                    />

                <FormField 
                    label='Password' 
                    type='password' 
                    name='password'
                    value={this.state.password} 
                    onChange={this.onChange}
                    required='required'
                    errors={this.state.errors.password}
                    />

                <FormField 
                    label='Confirm Password' 
                    type='password'
                    name='confirmPassword' 
                    value={this.state.confirmPassword} 
                    onChange={this.onChange}
                    required='required'
                    errors={this.state.errors.confirmPassword}
                    />    
                
                <FormField 
                    label='Time Zone' 
                    type='select'
                    name='timeZone' 
                    value={this.state.timeZone} 
                    onChange={this.onChange}
                    options={timeZoneOptions}
                    errors={this.state.errors.timeZone}
                    />
                    
                <FormField 
                    label='Sign Up' 
                    type='button'
                    btnClass='btn-primary'
                    links={linksWithSignUpButton}
                    loading={this.state.isLoading}
                    />
            </form>
        );
    }
}
