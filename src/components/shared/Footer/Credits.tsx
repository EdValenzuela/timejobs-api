import { getAnio } from '../../../helpers';
import { PropsCredits } from '../../../redux/interfaces';

const Credits = ({item}: PropsCredits) => {
    return (
        <div className="bg-gray-50">
          <div className="container mx-auto w-full py-6 px-5">
            <p className="text-gray-500 text-sm text-center">
                {item.name} © {getAnio()}
              <span className="ml-1 font-bold text-red-500">{item.autor}</span>
            </p>
          </div>
        </div>
    )
}

export default Credits
