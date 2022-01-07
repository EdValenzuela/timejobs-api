import React from 'react'
import { getAnio } from '../../../helpers';
import { PropsCredits } from '../../../redux/interfaces';

const Credits = ({item}: PropsCredits) => {
    return (
        <div className="bg-gray-100">
          <div className="container mx-auto w-full py-6 px-5">
            <p className="text-gray-500 text-sm text-center">
                {item.name} © {getAnio()}
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="ml-1 font-bold text-red-500"
                target="_blank"
              >
                {item.autor}
              </a>
            </p>
          </div>
        </div>
    )
}

export default Credits
