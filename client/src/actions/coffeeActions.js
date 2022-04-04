import axios from "axios"


export const getAllCoffees = () => async dispatch => {

    dispatch({ type: 'GET_COFFEES_REQUEST' })

    try {
        const response = await axios.get('https://immense-inlet-63012.herokuapp.com/api/coffees/getallcoffees')
        console.log(response);
        dispatch({ type: 'GET_COFFEES_SUCCESS', payload: response.data })

    } catch (error) {
        dispatch({ type: 'GET_COFFEES_FAILED', payload: error })
    }
}

export const filterCoffees = (searchkey, category) => async dispatch => {

    let filteredCoffees;
    dispatch({ type: 'GET_COFFEES_REQUEST' })

    try {
        const response = await axios.get('/api/coffees/getallcoffees')
        filteredCoffees = response.data.filter(coffee => coffee.name.toLowerCase().includes(searchkey))

        if (category != 'all')
            (
                filteredCoffees = response.data.filter(coffee => coffee.category.toLowerCase().includes(category))
            )

        console.log(response);
        dispatch({ type: 'GET_COFFEES_SUCCESS', payload: filteredCoffees })

    } catch (error) {
        dispatch({ type: 'GET_COFFEES_FAILED', payload: error })
    }
}

export const addCoffee = (coffee) => async dispatch => {
    dispatch({ type: 'ADD_COFFEE_REQUEST' })
    try {
        const response = await axios.post('/api/coffees/addcoffee', { coffee })
        console.log(response);
        dispatch({ type: 'ADD_COFFEE_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_COFFEE_FAILED', payload: error })
    }
}

export const getCoffeeById = (coffeeid) => async dispatch => {

    dispatch({ type: 'GET_COFFEEBYID_REQUEST' })

    try {
        const response = await axios.post('/api/coffees/getcoffeebyid', { coffeeid })
        console.log(response);
        dispatch({ type: 'GET_COFFEEBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_COFFEEBYID_FAILED', payload: error })
    }

}

export const editCoffee=(editedcoffee)=>async dispatch=>{
    dispatch({type:'EDIT_COFFEE_REQUEST'})
    try {
        const response= await axios.post('/api/coffees/editcoffee' , {editedcoffee})
        console.log(response);
        dispatch({type:'EDIT_COFFEE_SUCCESS'})
        window.location.href='/admin/coffeeslist'
    } catch (error) {
        dispatch({type:'EDIT_COFFEE_FAILED' , payload : error})
    }
}

export const deleteCoffee=(coffeeid)=>async dispatch=>{

    try {
        const response =await axios.post('/api/coffees/deletecoffee' , {coffeeid})
        alert('Coffee Deleted Successfully')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
           
    
    }
    
