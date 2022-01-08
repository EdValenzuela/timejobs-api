import { ADD, BeerCartAction, DELETE } from '../actions/beerCartAction';
import { DataCart } from '../interfaces';

const initialProps:DataCart = {
    dataCart: []
}

export default (state=initialProps, action:BeerCartAction) => {
    switch (action.type) {
        case ADD:
            return{
                ...state,
                dataCart: [
                    ...state.dataCart,
                    action.payload
                ]
            }
        case DELETE:
            return{
                ...state,
                dataCart: state.dataCart.filter((item:any) => item.id !== action.payload)
            }
        default:
            return state
    }
}