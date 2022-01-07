
import { PropsCat } from '../../../redux/interfaces'

const CardCateg = ({item}: PropsCat) => {
    return (
        <li>
            <p className="text-gray-600 hover:text-gray-800">{item.name}</p>
        </li>
    )
}

export default CardCateg
