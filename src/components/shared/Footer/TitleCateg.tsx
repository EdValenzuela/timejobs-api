
import { PropsTitle } from '../../../redux/interfaces'

const TitleCateg = ({title}: PropsTitle) => {
    return (
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
            {title}
        </h2>
    )
}

export default TitleCateg
