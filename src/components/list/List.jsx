import React, { Component } from "react";
import Item from "./item/Item";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { initialData, onDeleteTask, onUpdateTask, onCompletedTask } = this.props
        return (
            <ul className="list">
                {initialData.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        onDeleteTask={() => onDeleteTask(item.id)}
                        onUpdateTask={onUpdateTask}
                        onCompletedTask={onCompletedTask}
                    />
                ))}
            </ul>
        );
    }
}

export default List;