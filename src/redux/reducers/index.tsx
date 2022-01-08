import { combineReducers } from "redux"
import beer from './beerReducer'
import cart from './cartBeerReducer'

export default combineReducers({
    beer,
    cart
});