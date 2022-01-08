import { connect } from 'react-redux'
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadingData from "./LoadingData";
import { addCart } from '../../redux/actions/beerCartAction'

const DetailBeer = ({addCart}) => {
  const { id } = useParams();
  const baseURL = `https://api.punkapi.com/v2/beers?ids=${id}`;
  const { data, fetching } = useFetch(baseURL);
  
  const { name, tagline, target_fg, description, image_url, brewers_tips } = data;

  return (
    <>
      {fetching ? (
        <LoadingData />
      ) : (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
                <div className="w-4/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">Detail Beer</h1>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{tagline}</h1>
                    <p className="mb-8 leading-relaxed">{description}</p>
                    <p className="mb-8 leading-relaxed">{brewers_tips}</p>
                    <div className="flex justify-evenly bg-white p-5 w-full items-center">
                        <div>
                            <p className='text-3xl font-bold text-red-500'>$ {target_fg}</p>
                        </div>
                        <button onClick={() => addCart(data)} className="flex items-center text-white bg-red-500 border-0 py-4 px-6 focus:outline-none hover:bg-red-600 rounded font-bold text-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                        <Link to="/" className="flex items-center text-white bg-amber-500 border-0 py-4 px-6 focus:outline-none hover:bg-amber-600 font-bold rounded text-lg">Back</Link>
                    </div>
                </div>
                <div className="lg:w-full md:w-1/2 w-1/4 h-2/4">
                    <img className="object-cover object-center mx-auto rounded" alt="hero" src={image_url} />
                </div>
            </div>
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
      cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCart: (value) => dispatch(addCart(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailBeer)
