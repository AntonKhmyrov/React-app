import React, { Component } from "react";

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            editedTaskTitle: this.props.title,
            completed: false
        };
    }

    handleEditInputChange = (e) => {
        this.setState({
            editedTaskTitle: e.target.value,
        });
    };

    handleEditing = () => {
        this.setState({
            isEdit: true,
        });
    };

    handleUpdateTask = (e) => {
        e.preventDefault();
        const { onUpdateTask, id } = this.props;
        onUpdateTask(id, this.state.editedTaskTitle);
        this.setState({
            isEdit: false,
        });
    };

    handleCompletedTask = (e) => {
        if (e.target.tagName.toLowerCase() === 'li') { // toLowerCase() потому что e.target.tagName возвращает имя тега в верхнем регистре
            const { onCompletedTask, id } = this.props
            onCompletedTask(id, this.state.completed)
            this.setState((prevState) => ({
                completed: !prevState.completed
            }));
        }
    }

    handleDeleteTask = () => {
        const { onDeleteTask, id } = this.props
        onDeleteTask(this.state.completed, id)
    }

    render() {
        const classNameItem = this.state.completed ? 'completed-item' : 'item'
        const { title, onDeleteTask } = this.props
        return (
            <li className={classNameItem} onClick={this.handleCompletedTask}>
                {this.state.isEdit ? (
                    <form onSubmit={this.handleUpdateTask}>
                        <input className="update-input"
                            value={this.state.editedTaskTitle}
                            onChange={this.handleEditInputChange}
                        />
                    </form>
                ) : (
                    <p>{title}</p>
                )}
                <div className="buttons">
                    <button className="item-button" onClick={this.handleEditing}>
                        <span className="material-symbols-outlined update">
                            upgrade
                        </span>
                    </button>
                    <button
                        className="item-button"
                        onClick={this.handleDeleteTask}
                    >
                        <span className="material-symbols-outlined delete">
                            delete
                        </span>
                    </button>
                </div>
            </li>
        );
    }
}

export default Item;

