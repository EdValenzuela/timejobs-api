import { NavLink } from "react-router-dom";
import '../../../styles/index.css'

const Header = () => {
  return (
    <>
      <header className="text-gray-600 bg-gray-50 body-font w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="w-full p-5 flex flex-wrap justify-center items-center">
            <NavLink to="/" title="Home" className="mr-5 font-bold text-2xl text-pink-900">Venta distribution</NavLink>
            <NavLink to="/shop" className="font-bold text-xl text-white bg-pink-900 hover:bg-pink-700 px-5 py-3 border-r-2 rounded-md">My cart</NavLink>
          </div>
          <nav className="w-full flex flex-wrap items-center text-base justify-center lg:justify-between">
            <a href="/#" className="mr-5 hover:text-gray-900">Lorem ipsum 1</a>
            <a href="/#" className="mr-5 hover:text-gray-900">Lorem ipsum 2</a>
            <a href="/#" className="mr-5 hover:text-gray-900">Lorem ipsum 3</a>
            <a href="/#" className="mr-5 hover:text-gray-900">Lorem ipsum 4</a>
            <a href="/#" className="mr-5 hover:text-gray-900">Lorem ipsum 5</a>
            <NavLink to="/maps" title="Maps" className="mr-5 cursor-pointer hover:text-gray-900">Ubicación</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
