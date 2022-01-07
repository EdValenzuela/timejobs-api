import React from 'react'
import { PropsCat } from '../../../redux/interfaces'

const CardCateg = ({item}: PropsCat) => {
    return (
        <li>
            <a className="text-gray-600 hover:text-gray-800">{item.name}</a>
        </li>
    )
}

export default CardCateg
