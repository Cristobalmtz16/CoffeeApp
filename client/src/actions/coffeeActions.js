import axios from "axios";
export const getAllCoffees=()=>async dispatch=>{

    dispatch({type:'GET_COFFEE_REQUEST'})

    try {
        const response = await axios.get('/api/coffee/getallcoffees')
        console.log(response);
        dispatch({type:'GET_COFFEE_SUCCESS' , payload : response.data})
       
    } catch (error) {
        dispatch({type:'GET_COFFEE_FAILED' , payload : error})
    }

}

export const getCoffeeById=(coffeeid)=>async dispatch=>{

    dispatch({type:'GET_COFFEEBYID_REQUEST'})

    try {
        const response = await axios.post('/api/coffee/getcoffeebyid' , {coffeeid})
        console.log(response);
        dispatch({type:'GET_COFFEEBYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_COFFEEBYID_FAILED' , payload : error})
    }

}

export const filterCoffee=(searchkey , category)=>async dispatch=>{

  
    dispatch({type:'GET_COFFEE_REQUEST'})

    try {
        var filteredCoffee ;
        const response = await axios.get('/api/coffee/getallcoffee')
        filteredCoffee = response.data.filter(coffee=>coffee.name.toLowerCase().includes(searchkey))
         
        if(category!='all')
        {
            filteredCoffee = response.data.filter(coffee=>coffee.category.toLowerCase()==category)

        }
        dispatch({type:'GET_COFFEE_SUCCESS' , payload : filteredCoffee})
    } catch (error) {
        dispatch({type:'GET_COFFEE_FAILED' , payload : error})
    }

}

export const addCoffee=(coffee)=>async dispatch=>{
    dispatch({type:'ADD_COFFEE_REQUEST'})
    try {
        const response= await axios.post('/api/coffee/addcoffee' , {coffee})
        console.log(response);
        dispatch({type:'ADD_COFFEE_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_COFFEE_FAILED' , payload : error})
    }
}

export const editCoffee=(editedcoffee)=>async dispatch=>{
    dispatch({type:'EDIT_COFFEE_REQUEST'})
    try {
        const response= await axios.post('/api/coffee/editcoffee' , {editedcoffee})
        console.log(response);
        dispatch({type:'EDIT_COFFEE_SUCCESS'})
        window.location.href='/admin/coffeelist'
    } catch (error) {
        dispatch({type:'EDIT_COFFEE_FAILED' , payload : error})
    }
}

export const deleteCofee=(coffeeid)=>async dispatch=>{

try {
    const response =await axios.post('/api/coffee/deletecoffee' , {coffeeid})
    alert('Drink Deleted Successfully')
    console.log(response);
    window.location.reload()
} catch (error) {
    alert('Something went wrong')
    console.log(error);
}
       

}
