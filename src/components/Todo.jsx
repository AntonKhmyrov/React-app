import React, { Component, createRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./form/Form";
import List from "./list/List";
import Button from "./button/Button";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialData: [],
        };

        this.formRef = createRef()
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialData.length !== this.state.initialData.length) {
            console.log('test');
            this.calculateCompletedTasksCount();
        }
    }

    handleAddTask = (newTask) => {
        const updatedData = [
            ...this.state.initialData,
            {
                title: newTask,
                id: uuidv4(),
                completed: false
            },
        ];
        this.setState(({
            initialData: updatedData,
        }));
        if (this.formRef.current) {
            this.formRef.current.setFocusOnInput()
        }
    };

    handleClearAllTask = () => {
        this.setState({
            initialData: [],
        });
    };

    handleDeleteTask = (id) => {
        const updatedData = this.state.initialData.filter(
            (item) => item.id !== id
        );
        this.setState(({
            initialData: updatedData,

        }))
    };

    handleUpdateTask = (id, newTaskTitle) => {
        const updatedData = this.state.initialData.map((item) =>
            item.id === id ? { ...item, title: newTaskTitle } : item
        );
        this.setState({
            initialData: updatedData
        });
    };

    handleCompletedTask = (id, completedStatus) => {
        const updatedData = this.state.initialData.map((item) =>
            item.id === id ? { ...item, completed: !completedStatus } : item)
        this.setState({
            initialData: updatedData
        }
        )
    }

    calculateCompletedTasksCount = () => {
        const completedTasksCount = this.state.initialData.filter(
            (item) => item.completed
        ).length;
        return completedTasksCount;
    }

    render() {
        return (
            <div className="todo">
                <Form ref={this.formRef} onAddTask={this.handleAddTask} />
                <div className="count-box">
                    <div className='all-task'>Existing tasks: {this.state.initialData.length}</div>
                    <div className="completed-task">Completed tasks: {this.calculateCompletedTasksCount()}</div>
                </div>
                <List
                    initialData={this.state.initialData}
                    onDeleteTask={this.handleDeleteTask}
                    onUpdateTask={this.handleUpdateTask}
                    onCompletedTask={this.handleCompletedTask}
                />
                <div className="footer-btn-box">
                    <Button onClearAll={this.handleClearAllTask} />
                </div>
            </div>
        );
    }
}

export default Todo;