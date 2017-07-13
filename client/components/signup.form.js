import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import timezones from './../data/timezones';
import map from 'lodash/map';

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

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.onChange}
                        required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.onChange}
                        required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.onChange} 
                        required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="confirmPassword" 
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        required />
                </div>
                <div className="form-group">
                    <label>TimeZone</label>
                    <select 
                        className='form-control'
                        name='timeZone'
                        onChange={this.onChange}
                        value={this.state.timeZone}
                        required>
                        <option value="" disabled>Choose Timezone</option>
                        {timeZoneOptions}
                    </select>
                </div>
                <div className="form-group">
                    <button 
                        className="btn btn-primary">
                        Register
                    </button>
                    <Link 
                        to='/login' 
                        className="btn btn-link">
                        Login
                    </Link>
                </div>
            </form>
        );
    }
}