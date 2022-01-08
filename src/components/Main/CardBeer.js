import { Link } from 'react-router-dom'

const CardBeer = ({item, addCart}) => {
    const { id, name, tagline, image_url, target_fg } = item;
    return (
        <>
            <li className="flex flex-col items-center border-2 border-gray-50 rounded-md cursor-pointer px-12 py-8 m-5 group bg-slate-100 hover:bg-white">
                <p className='uppercase text-sm text-amber-500'>{tagline}</p>
                <p className='uppercase text-lg font-bold my-3'>{name}</p>
                <div>
                    <img alt='imgbeer' className='w-full h-80' src={image_url} />
                </div>
                <div className='my-5'>
                    <p className='text-3xl font-bold text-red-500'>${target_fg}</p>
                </div>
                <button onClick={ () => addCart(item) }
                    className="bg-pink-900 hover:bg-pink-700 text-white w-9/12 mb-2 flex items-center justify-center font-bold py-2 px-4 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                </button>
                <Link to={`/detail/${id}`} title={`/detail/${id}`}
                    className="bg-pink-900 hover:bg-pink-700 text-white w-9/12 text-center font-bold py-2 px-4 rounded uppercase text-base">
                        Detail
                </Link>
            </li>
        </>
    )
}

export default CardBeer
