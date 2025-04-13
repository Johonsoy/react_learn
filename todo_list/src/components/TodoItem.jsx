import React, {Component} from 'react';

class TodoItem extends Component {

    handleEditSubmit = () => {

    }

    handleEditToggle = () => {

    }

    handleEditChange = () => {

    }

    render() {
        const {todo, onDelete, onToggle} = this.props
        const {isEditing, editText} = this.props
        return (
            <div className={`todo-item ${todo.completed ? 'completed': ''}`}>
                {
                    isEditing ? (
                        <form onSubmit={this.handleEditSubmit} className="edit-form">
                            <input
                                type="text"
                                value={editText}
                                onChange={this.handleEditChange}
                                className="edit-input"
                                autoFocus
                            />
                            <button type="submit" className="save-button">
                                Save
                            </button>
                            <button type="button" className="cancel-button" onClick={this.handleEditToggle}>
                                Cancel
                            </button>
                        </form>
                    ):(
                        <div className="todo-content">
                            <input type="checkbox"
                                   checked={todo.completed}
                                   onChange={() => onToggle(todo.id)}
                                   className="todo-checkbox"
                            />
                            <span className="todo-text">{todo.text}</span>
                            <div className="todo-action">
                                <button onClick={this.handleEditToggle} className="edit-button">
                                    Edit
                                </button>
                                <button onClick={() => onDelete(todo.id)} className="delete-button">
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default TodoItem;