import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, BeerAction } from "../actions/beerAction";
import { DataState } from "../interfaces";

const initialState: DataState = {
    data : [],
    isFetching: false,
    error: null
}

export default (state = initialState, action: BeerAction) =>{
    switch (action.type){
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                isFetching: false,
                data: action.payload.data
            }
        case FETCH_DATA_ERROR:
            return{
                ...state,
                isFetching: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}