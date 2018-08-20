import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './TodoListTemplate.js';
import Form from './Form.js';
import TodoItemList from './TodoItemList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트 공부', checked: false},
      {id: 1, text: '일본어 단어 외우기', checked: true},
      {id: 2, text: '영어 강연 듣기', checked: false}
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        
      })
    })
    console.log({input})
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate()
    }
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
        value={input}
        onKeyPress={handleKeyPress}
        onCreate={handleCreate}
        onChange={handleChange}
        />
      )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;
