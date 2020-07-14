import React, { Component } from 'react';
import './TodoApp.css';
import classNames from 'classnames';
import ListComplete from './ListComplete.js'; 
import ListTodo from './ListTodo.js'; 

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      text: "",
      onClickedModal: "none",
      todoItems: [
        // {work:"Work", isComplete: false},
        // {work:"Done", isComplete: true}
      ]
    };
    this.clickDisplayModal = this.clickDisplayModal.bind(this);
    this.clickHiddenModal = this.clickHiddenModal.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onKeyUpValue = this.onKeyUpValue.bind(this);
    this.enterHiddenInput = this.enterHiddenInput.bind(this);
    this.clickDone = this.clickDone.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  }


  // click to done a task of list or delete
  clickDone(item) {
    const {todoItems} = this.state;
    const index = todoItems.indexOf(item);
    const isComplete = todoItems.isComplete;

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        {
          ...item, 
          isComplete: !isComplete
        },
        ...todoItems.slice(index + 1)
      ]
    })
  }

  clickDelete(item) {
    // someArray.splice(0, 1);
    const {todoItems} = this.state;
    const index = todoItems.indexOf(item);
    const isComplete = todoItems.isComplete;

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1)
      ]
    })
  }


  // clickDisplay vs clickHidden to display Modal - add listitem
  clickDisplayModal() {
    this.setState({
      onClickedModal: "inherit"
    })
  }

  clickHiddenModal() {
    this.setState({
      onClickedModal: "none"
    })
  }

  enterHiddenInput(e) {
    if(e.keyCode === 13) {
      return this.clickHiddenModal();
    }
  }

  // input Type
  onChangeValue(e) {
    const {text, todoItems} = this.state;
    this.setState({
        newItem: e.target.value
      })
  }

  onKeyUpValue(e) {
    const {todoItems} = this.state;
    let text = event.target.value;
    if(e.keyCode === 13 ) {
      if(!text) {
        return;
      }

      text = text.trim();

      if(!text) {
        return;
      }
      this.setState({
        newItem: "",
        todoItems: [
          ...this.state.todoItems,
          {work: text, isComplete: false}
        ]
      })
    } else {
      this.setState({
        newItem: text
      })
    }
  }

  render() {
    const clickDisplayModal = this.clickDisplayModal;
    const clickHiddenModal = this.clickHiddenModal;
    const {onClickedModal, todoItems, newItem} = this.state;  
    console.log(todoItems);
    if(todoItems.length <= 0) {
      return (
        <div className="TodoApp">
          <div className="Header">
            <span>Menu</span>
            <h3>D A I L I S T</h3>
            <span>Menu</span>
          </div>
          <div className="formModal layout" style={{display: this.state.onClickedModal}}>
            <div className="textModal">
              <input 
                type="text" 
                placeholder="Type your TODO list..."
                value={newItem}
                onChange={this.onChangeValue}
                onKeyUp={(e)=> {
                  this.onKeyUpValue(e);
                  this.enterHiddenInput(e);
                }}
              />
            </div>    
          </div>
          <div className="bgImage">
            <img src='https://svgshare.com/i/MuP.svg' title='' />
          </div>
          <div onClick={this.clickDisplayModal} className="AddBtn">
            <img src="https://image.flaticon.com/icons/svg/1828/1828817.svg"/>
          </div>
        </div>  
      )
    } else {
      return (
      <div className="TodoApp">
        <div className="Header">
          <span>Menu</span>
          <h3>D A I L I S T</h3>
          <span>Menu</span>
        </div>
        <div className="formModal layout" style={{display: this.state.onClickedModal}}>
          <div className="textModal">
            <input 
              type="text" 
              placeholder="Type your TODO list..."
              value={newItem}
              onChange={this.onChangeValue}
              onKeyUp={(e)=> {
                this.onKeyUpValue(e);
                this.enterHiddenInput(e);
              }}
            />
          </div>    
        </div>
        <div className="ListTodo"> 
          <p className="Title">U P C O M I N G</p>
          {
            todoItems.map((value, index) => 
            <ListTodo 
              todoItems={value} 
              key={index}
              clickDone={()=> this.clickDone(value)}
            />) 
          }
        </div>
        <div className="ListComplete">
          <p className="Title">F I N I S H E D</p>
            {
              todoItems.map((value, index)=> 
              <ListComplete 
                todoItems={value} 
                key={index}
                clickDelete={() => this.clickDelete(value)}
              />)
            }
        </div>
        
        <div onClick={this.clickDisplayModal} className="AddBtn">
          <img src="https://image.flaticon.com/icons/svg/1828/1828817.svg"/>
        </div>
      </div>
    )
  }
    }
}

export default TodoApp;

// add, delete, 

// <div className="btnQuestion">
          //   <a 
          //     onClick={this.clickHiddenModal} 
          //     className="btnDecline" 
          //     href="#">Cancel
          //   </a>
          //   <a 
          //     onClick={this.clickHiddenModal} 
          //     className="btnAccept" 
          //     href="#">
          //     Confirm
          //   </a>          
          // </div> 