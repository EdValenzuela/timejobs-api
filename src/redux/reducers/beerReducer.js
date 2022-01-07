import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../actions/beerAction";

const initialState = {
    data : [],
    isFetching: false,
    error: null
}

export default (state = initialState, action) =>{
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