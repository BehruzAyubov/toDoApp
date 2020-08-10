import React, { Component } from 'react';

class SubmitForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.input === '') return;
        this.props.onFormSubmit(this.state.input);
        this.setState({ input: '' });
      }
    handleChange(e){
        this.setState({
            input: e.target.value
        })
    }
    render(){
        return(
            <div className = "inputForm">
                <form onSubmit = {this.handleSubmit}>
                    <input
                    className = "input" 
                    type ="text" 
                    value = {this.state.input} 
                    onChange = {this.handleChange} 
                    placeholder ="Enter task"
                    />
                    <button className = "input-btn" >Submit</button>
                </form>
            </div>
        )
    }
}

export  default SubmitForm;