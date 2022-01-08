import { connect } from 'react-redux'
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadingData from "./LoadingData";
import { addCart } from '../../redux/actions/beerCartAction'
import { useCounter } from '../../hooks/useCounter';

const DetailBeer = ({addCart}) => {
  const { id } = useParams();
  const baseURL = `https://api.punkapi.com/v2/beers?ids=${id}`;
  const { data, fetching } = useFetch(baseURL);
  
  const { name, tagline, target_fg, description, image_url, brewers_tips } = data;

  const { count, handleIncrement, handleDecrement } = useCounter(1);

  const btnCounter = () => (
    <div className='w-full xl:w-auto flex items-center justify-between border-2 border-gray-200 rounded-full p-2'>
      <button onClick={() => handleDecrement()} className="w-full xl:w-auto flex justify-center items-center border-0 p-5 focus:outline-none cursor-pointer rounded">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      </button>
      <p className='text-2xl font-bold my-2'>{count}</p>
      <button onClick={() => handleIncrement()} className="w-full xl:w-auto flex justify-center items-center border-0 p-5 focus:outline-none cursor-pointer rounded">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )

  const btnAdd = () => (
    <button onClick={() => addCart(data)} className="w-full xl:w-auto flex justify-center items-center my-5  text-white bg-pink-900 hover:bg-pink-700 border-0 p-5 focus:outline-none hover:bg-pink-00 rounded font-bold text-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    </button>
  )

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
                    <div className="flex flex-col xl:flex-row justify-evenly bg-white p-5 w-full items-center">
                        <p className='text-3xl font-bold text-black mb-3'>$ {target_fg}</p>
                        {btnCounter()}
                        {btnAdd()}
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
