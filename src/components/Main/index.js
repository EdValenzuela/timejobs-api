import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../redux/actions/beerCartAction';
import { getFetchData } from '../../redux/actions/beerAction';

import CardBeer from './CardBeer';
import LoadingData from './LoadingData';

const Beer = ({beer, getFetch, addCart}) => {

    useEffect(() => {
        const getData = async() => {
            const resp = await getFetch();
            return resp;
        };
        getData();
    }, [getFetch]);

    return (
        <div className='container xl:container m-auto p-5'>
            {
                beer.isFetching 
                ? (<LoadingData/>)
                : (
                    <ul className="flex flex-wrap flex-row justify-center md:justify-start mt-5">
                        {
                            beer.data.map( item => ( 
                                <CardBeer key={item.id} item={item} addCart={addCart} />
                            ))
                        }
                    </ul>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        beer: state.beer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFetch : () => dispatch(getFetchData()),
    addCart: (value) => dispatch(addCart(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Beer)
