import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

export default class NavBarComponent extends Component{

    render(){
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className='navbar-brand'>Hexagon Sourcing</Link>
                        
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                        <ul className="nav navbar-nav navbar-right" >
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login" >Login</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}