import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    state = {
        todos: [],
        newTodo: '',
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
                    {this.state.todos.map((todo)=>{
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

    handleEditTodo = () => {}


    handleToggleTodo = () => {}


    handleDeleteTodo = () => {

    }

    handleAddTodo = () => {

    }

    handleInputChange = ()=> {

    }
}

export default TodoList;