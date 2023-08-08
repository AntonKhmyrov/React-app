import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    DELETE_ALL_TODOS,
} from './actionTypes';

export const addTodo = (title) => ({
    type: ADD_TODO,
    payload: { title },
});

export const editTodo = (id, title) => ({
    type: EDIT_TODO,
    payload: { id, title },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id },
});

export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    payload: { id },
});

export const deleteAllTodos = () => ({
    type: DELETE_ALL_TODOS,
});