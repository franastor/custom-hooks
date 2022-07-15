import { useState } from "react"




  
    export const useCounter = ( initialValue =1 , mini = 0) => {

        const [counter, setCounter] = useState(initialValue )

        const increment  = ( value = 1) => {
          //  setCounter (counter  + value);
          setCounter ( (current  ) => current + value)
        }

        const decrement = (value = 1, mini) => {
            if(counter === mini) return;
          //  setCounter (counter - value );
          setCounter ( (current  ) => current - value)
        }

        const reset = () => {
            setCounter( initialValue);
        }


        return {

            counter : counter,
            increment,
            decrement,
            reset

        }

       

    }
       

