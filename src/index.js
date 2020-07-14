import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import TodoApp from './components/TodoApp';
import classNames from 'classnames';
 
class App extends Component {
  render() {
    return (
      <TodoApp />
    )
  }
}

render(<App />, document.getElementById('root'));
