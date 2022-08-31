// This file will be our endpoints
import axios from 'axios'
const baseURL ="https://erikas-express-todo.herokuapp.com/todos"

export const getTodos = () => {
    // const URL = 'https://erikas-express-todo.herokuapp.com/todos'
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

export const getTodo = (id) => {
    // const URL = `https://erikas-express-todo.herokuapp.com/todos/${id}`
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteTodo = (id) => {
    // const URL = `https://erikas-express-todo.herokuapp.com/todos/${id}`
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
    // const URL = `https://erikas-express-todo.herokuapp.com/todos/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}

export const createTodo = (todo) => {
    // const URL = 'https://erikas-express-todo.herokuapp.com/todos'
    const URL = baseURL
    const response = axios.post(URL, todo)
    return response
}