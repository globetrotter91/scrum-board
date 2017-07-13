import React, { Component } from 'react' ;

export default class FormField extends Component{

    render(){
        if(this.props.type=='button'){
            const btnClass = 'btn '+ this.props.btnClass ;
            const linksWithButton = (this.props.links)?this.props.links:'' ;
            return(
                
                <div className="form-group">
                    <button className={btnClass}>{this.props.label}</button>
                    {linksWithButton}
                </div>                   
                
            );        
        }
        else if(this.props.type=='select'){
            return(
                <div className="form-group">
                    <label>{this.props.label}</label>
                    <select 
                        className='form-control'
                        name={this.props.name} 
                        onChange={this.props.onChange}
                        value={this.props.value}
                        required>
                        <option value="" disabled>Choose</option>
                        {this.props.options}
                    </select>
                </div>
            );        
        }else{
            return(
                <div className="form-group">
                    <label>{this.props.label}</label>
                    <input 
                        type={this.props.type} 
                        className="form-control" 
                        name={this.props.name} 
                        value={this.props.value} 
                        onChange={this.props.onChange}
                        required={this.props.required}/>
                </div>
            );
        }
        
        
    }
}