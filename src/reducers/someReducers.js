import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    DELETE_ALL_TODOS,
} from "../actions/actionTypes";

const initialState = {
    listTodos: [],
    deletedListTodos: [],
    completedListTodos: []
}

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                listTodos: [...state.listTodos, {
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false
                }]
            };

        case DELETE_TODO:
            const deletedTodoIndex = state.listTodos.findIndex(todo => todo.id === action.payload.id);
            if (deletedTodoIndex !== -1) {
                const deletedTodo = state.listTodos[deletedTodoIndex];
                return {
                    ...state,
                    listTodos: state.listTodos.filter((_, index) => index !== deletedTodoIndex),
                    deletedListTodos: [...state.deletedListTodos, deletedTodo]
                }
            };

        case DELETE_ALL_TODOS:
            return {
                ...state,
                deletedListTodos: [...state.deletedListTodos, ...state.listTodos],
                listTodos: []
            };

        default:
            return state;
    }
}