import React, {Component} from 'react';
import './TodoApp.css';

class ListTodo extends Component {
  render() {
    const {todoItems, clickDone} = this.props;
    if(!todoItems.isComplete) {
      return (
        <div className="ListTodo">
          {
            <div className="listTop">
              <p>{todoItems.work}</p>
              <span 
                className="btnDone"
                onClick={clickDone}
                >
                <img src="https://image.flaticon.com/icons/svg/860/860799.svg"/>
              </span>
            </div>
          }        
        </div>
      )
    } else {
      return (
        <div className="ListTodo">
          {
            <div className="listTop hidden">
              <p>{todoItems.work}</p>
            </div>
          }  
        </div>
      )
    }
    
  }
}

export default ListTodo;
// {
//               todoItems.map((value,index)=> {
//                 value.work
//               })
//             }