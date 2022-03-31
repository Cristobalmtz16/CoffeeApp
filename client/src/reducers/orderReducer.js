export const placeOrderReducer = (state={}, action) =>{

    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return{
            loading:true
        }
        case ' PLACE_ORDER_SUCCESS' : return{
            loading:true,
            success:true
        }
        case ' PLACE_ORDER_FAILED' : return{
            laoding:false,
            error: action.payload
        }
        default : return state
    }

}