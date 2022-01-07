import React from 'react'

const CardBeer = ({item}) => {
    const { name, image_url } = item;
    return (
        <>
            <li className="flex flex-col justify-between items-center border-2 border-gray-100 rounded-md cursor-pointer px-12 py-8 m-5 group hover:bg-gray-300">
                <p className='uppercase'>{name}</p>
                <div>
                    <img className='w-full h-80' src={image_url} />
                </div>
            </li>
        </>
    )
}

export default CardBeer
