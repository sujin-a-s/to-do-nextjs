import { todoServices } from "../services/todos.services"

const dispatch  = useDispa

export function loadTodos () {
    return (dispatch)=>{
        dispatch(request())
        todoServices.loadTodos().then(
            (res)=>{
                const {todos,error,message} = res
                if(error){
                    dispatch()
                }
            }
        )
    }
}