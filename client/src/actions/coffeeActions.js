import axios from "axios"


export const getAllCoffees=()=>async dispatch=>{

    dispatch({type: 'GET_COFFEES_REQUEST'})

    try {
        const response = await axios.get('/api/coffees/getallcoffees')
        console.log(response);
        dispatch({type: 'GET_COFFEES_SUCCESS', payload : response.data})

    }catch(error) {
        dispatch({type: 'GET_COFFEES_FAILED', payload : error})
    }
}

export const filterCoffees=(searchkey, category)=>async dispatch=>{

    let filteredCoffees ;
    dispatch({type: 'GET_COFFEES_REQUEST'})

    try {
        const response = await axios.get('/api/coffees/getallcoffees')
        filteredCoffees=response.data.filter(coffee=>coffee.name.toLowerCase().includes(searchkey))

        if(category!='all')
        (
            filteredCoffees=response.data.filter(coffee=>coffee.category.toLowerCase().includes(category))
        )

        console.log(response);
        dispatch({type: 'GET_COFFEES_SUCCESS', payload : filteredCoffees})

    }catch(error) {
        dispatch({type: 'GET_COFFEES_FAILED', payload : error})
    }
}