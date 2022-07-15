import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () =>{

    const initialState = [


    ]

    const inicio = () => {

        return JSON.parse( localStorage.getItem('todos') ) || []; //intenta parsear el string de todos y convertirlo en un json. y sino tiene contenido lo devuelve vacio
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState , inicio) // con init le vamos a dar un valor inicial al initialState

    useEffect( () => {
            
           localStorage.setItem('todos',JSON.stringify( todos || [] )); //por si todos es null
           
           

    },[todos])
    const handNewTodo = ( todo ) => {   ///con esto hacemos que el reducer funcione.
   

        const action = {
            type: '[TODO] Add todo',
            payload: todo 
        }

        dispatch (action) //Aqui se lanza el reducer pasandole la accion

      
    }

    const handRemoveTodo = ( todo )=> {

        
        const action = {
            type: '[TODO] Remove todo',
            payload: todo.todo.todo.id
        }
        dispatch (action) 
    }

    const handleToggleTodo = ( todo )=> {

        
        const action = {
            type: '[TODO] Toogle todo',
            payload: todo
        }
       
        dispatch (action) 
    }
  
    


    return {
        todos: todos,
        handNewTodo,
        handRemoveTodo,
        handleToggleTodo,
        pendingTodosCount : todos.filter(todo => !todo.done).length,
        totalCount : todos.length

    }




}