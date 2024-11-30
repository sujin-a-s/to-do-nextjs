import { getDefaultParams } from "../helper/tool";
import axios from axios



export function loadTodos (){
    return axios.get("http://localhost:3000/todo",getDefaultParams())
        .then((res)=>res)
        .catch((error)=>Promise.reject(error))
}



export function createTodo(todo){
    return axios.post("http://localhost:3000/todo",getDefaultParams())
        .then((res)=>res)
        .catch((error)=>Promise.reject(error))
}


export function deleteTodo(id){
    return axios.delete("http://localhost:3000/todo",getDefaultParams())
        .then((res)=>res)
        .catch((error)=>Promise.reject(error))
}


export const todoServices ={
    loadTodos,
    createTodo,
    deleteTodo
}