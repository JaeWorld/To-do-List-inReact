import React, {Component} from 'react';
import Add from './Add.js';

const Title = () => {
    return (
        <div>
            <h1>To-do</h1>
        </div>
    )
}

const List = () => {
    return (
        <div>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </div>
    )
}

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Title />
                <Add />
                <List />
            </div>
        )
    }
}
export default TodoApp;
