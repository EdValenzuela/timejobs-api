import { connect } from 'react-redux'
import { deleteCart } from '../../redux/actions/beerCartAction'
import CartVacio from './CartVacio'
import ProductsCart from './ProductsCart'

const CartBeer = ({cart, clean}) => {
    
    return (
        <>
            {cart.dataCart.length > 0 ? (
                cart.dataCart.map(item => 
                ( <ProductsCart key={item.id = Math.random()} item={item} clean={clean} /> ))
            ) : (
                <CartVacio />
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    clean : (value) => dispatch(deleteCart(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartBeer)
