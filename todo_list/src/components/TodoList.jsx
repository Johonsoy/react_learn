import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import "./TodoList.css"


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: '',
        }
    }

    render() {
        return (
            <div className="todo-list">
                <form onSubmit={this.handleAddTodo} className="todo-form">
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        placeholder="Add a new task...."
                        className="todo-input"
                    />
                    <button type="submit" className="todo-button">
                        Add
                    </button>
                </form>
                <div className="todo-items">
                    {this.state.todos.map((todo) => {
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={this.handleDeleteTodo}
                            onToggle={this.handleToggleTodo}
                            onEdit={this.handleEditTodo}
                        />
                    })}
                </div>
            </div>
        );
    }

    handleEditTodo = (id, newText) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) => {
                todo.id === id ? {...todo, text: newText} : todo
            })
        }))
    }


    handleToggleTodo = (id) => {
        this.setState((pre) => ({
            todos: pre.todos.map((todo) => {
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            })
        }))
    }


    handleDeleteTodo = (id) => {
        this.setState((pre) => ({
            todos: pre.todos.filter((todo) => todo.id !== id),
        }))
    }

    handleAddTodo = (event) => {
        event.preventDefault();
        if (this.state.newTodo === '') return
        const newTodo = {
            id: Date.now(),
            text: this.state.newTodo,
            completed: false,
        }
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo],
            newTodo: '',
        }))
    }

    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    }
}

export default TodoList;