import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';

import Header from './component/header.js';
import SubmitForm from './component/submit.js';
import TodoList from './component/todoList.js';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        
    }

    handleSubmit = addTask => {
        this.setState({tasks: [...this.state.tasks, addTask]});
      }
    handleDelete = (index) => {
        const newArray = [...this.state.tasks];
        newArray.splice(index,1);
        this.setState({
            tasks : newArray
        });
    }

    render(){
        return(
        <div className="wrapper">
            <div className="wrapper-frame">
            <Header numTask= {this.state.tasks.length} />
            <TodoList  tasks = {this.state.tasks} onDelete = {this.handleDelete} />
            <SubmitForm onFormSubmit ={this.handleSubmit}/>
            </div>
        </div>
        )
    }
}



export default App;