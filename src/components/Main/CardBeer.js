import { Link } from 'react-router-dom'

const CardBeer = ({item}) => {
    const { id, name, tagline, image_url, target_fg } = item;
    return (
        <>
            <li className="flex flex-col items-center border-2 border-amber-100 rounded-md cursor-pointer px-12 py-8 m-5 group bg-slate-100 hover:bg-white">
                <p className='uppercase text-sm text-amber-500'>{tagline}</p>
                <p className='uppercase text-lg font-bold my-3'>{name}</p>
                <div>
                    <img alt='imgbeer' className='w-full h-80' src={image_url} />
                </div>
                <div className='my-5'>
                    <p className='text-3xl font-bold text-red-500'>${target_fg}</p>
                </div>
                <Link to={`/detail/${id}`} title={`/detail/${id}`}
                    className="bg-purple-900 hover:bg-purple-500 text-white w-9/12 text-center font-bold py-2 px-4 rounded uppercase text-base">
                        More
                </Link>
            </li>
        </>
    )
}

export default CardBeer
