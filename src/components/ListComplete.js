import React, {Component} from 'react';
import './TodoApp.css';

class ListComplete extends Component {
  render() {
    const {todoItems, clickDelete} = this.props;
    if(!todoItems.isComplete) {
      return (
        <div className="ListComplete">
          <div className="listBottom hidden" >
            {
              <p className="hidden">{todoItems.work}</p>
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className="ListComplete">
          {
            <div className="listBottom" >
              <p>{todoItems.work}</p>
              <span 
                className="btnDelete" 
                onClick={clickDelete}>
                <img src="https://image.flaticon.com/icons/svg/1617/1617543.svg" alt="deleteBtn"/>
              </span>
            </div>
          }      
        </div>
      )
    }
    
  }
}

export default ListComplete;