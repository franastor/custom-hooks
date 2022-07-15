import {
    useEffect, useState
} from "react";

export const useFecht = ( url ) => {

    const [state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

  //  console.log( "Entramos URL",url)
   
    const getFecht = async ( url ) => {
        setState({
           ...state,
           isLoading: true
        })
        //console.log( "Entramos URL2",url)
        const respuesta = await fetch( url );
        const data = await respuesta.json();
        setState({
            data,
            isLoading : false,
            hasError: false
        })
  
       
     
     //   console.log(data);
    }

    useEffect(() => {
        getFecht(url);

    }, [url]) //cada vez que la url cambie se va a ejecutar el useEffect


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };

 
}