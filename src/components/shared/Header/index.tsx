import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import '../../../styles/index.css'

const Header = (props: any) => {
  return (
    <>
      <header className="text-gray-600 bg-gray-50 body-font w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="w-full p-5 flex flex-wrap justify-center items-center">
            <NavLink to="/" title="Venta distribution" className="mr-5 font-bold text-2xl text-pink-900">Venta distribution</NavLink>
            <NavLink to="/shop" title="Go to cart" className="flex items-center font-bold text-xl text-white bg-pink-900 hover:bg-pink-700 px-5 py-3 border-r-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg> {props.cart.dataCart.length > 0 && (<span className="bg-white text-pink-900 rounded-2xl ml-5 px-3 py-1">{props.cart.dataCart.length}</span>)}
            </NavLink>
          </div>
          <nav className="w-full flex flex-wrap items-center text-base justify-center lg:justify-between">
            <NavLink to="/" title="Home" className="mr-5 hover:text-gray-900 font-bold text-lg">Home</NavLink>
            <p className="mr-5 hover:text-gray-900 font-bold text-lg">Lorem ipsum 2</p>
            <p className="mr-5 hover:text-gray-900 font-bold text-lg">Lorem ipsum 3</p>
            <p className="mr-5 hover:text-gray-900 font-bold text-lg">Lorem ipsum 4</p>
            <p className="mr-5 hover:text-gray-900 font-bold text-lg">Lorem ipsum 5</p>
            <NavLink to="/maps" title="Maps" className="mr-5 cursor-pointer hover:text-pink-900 font-bold text-lg text-pink-700">Location</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state:any) => {
  return {
      cart: state.cart
  }
}
export default connect(mapStateToProps)(Header)
