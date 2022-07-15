export const todoReducer = ( initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add todo':

        return [
            ...initialState,
            action.payload
        ]

        case '[TODO] Remove todo':

        console.log("eltodo del reducer es" , action.payload);

           // return initialState.filter ( todo.todo.id !== action.payload)

           return initialState.filter( todo => todo.id !== action.payload  ) ;
            
           // throw new Error (' Action.type = ABC no esta implementada') //mientras no este implementada la accion



           case '[TODO] Toogle todo':

            return initialState.map ( todo => {
                console.log("todo",todo.id)
                console.log("action.payload",action.payload)
                if ( todo.id === action.payload){
                    
                    return {
                        ...todo,
                        done : !todo.done
                        
                    }

                   
                }
                return todo;

            })
    
               
    
              
    
        default:
            return initialState;
    }

}