import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Todo List</h1>
                <TodoList />
            </div>
        );
    }
}

export default App;