import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import timezones from './../data/timezones';
import map from 'lodash/map';
import FormField from './common/form.field' ;

export default class SignupForm extends Component{

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '', 
            timeZone: ''
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
                    required='required'/>

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
                    label='Confirm Password' 
                    type='password'
                    name='confirmPassword' 
                    value={this.state.confirmPassword} 
                    onChange={this.onChange}
                    required='required'/>    
                
                <FormField 
                    label='Time Zone' 
                    type='select'
                    name='timeZone' 
                    value={this.state.timeZone} 
                    onChange={this.onChange}
                    required='required'
                    options={timeZoneOptions}
                    />
                    
                <FormField 
                    label='Sign Up' 
                    type='button'
                    btnClass='btn-primary'
                    links={linksWithSignUpButton}
                    />
            </form>
        );
    }
}