export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export type BeerAction = 
    | { type: 'FETCH_DATA_REQUEST' }
    | { type: 'FETCH_DATA_SUCCESS', payload : { data : any } }
    | { type: 'FETCH_DATA_ERROR', payload : { error : string } }

export const getFetchData = () => async(dispatch:(any)) => {

    dispatch({type: FETCH_DATA_REQUEST});

    try {
        const resp = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=50');
        const data = await resp.json();
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload :{
                data
            }
        })
    } catch (error:any) {
        dispatch({
            type: FETCH_DATA_ERROR,
            error: error.toString()
        })
    }
}

