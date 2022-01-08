export const ADD = 'ADD';
export const DELETE = 'DELETE';

export type BeerCartAction = 
    | { type: 'ADD', payload : { state : any } }
    | { type: 'DELETE', payload : { id : number } } 

export const addCart = (state:any) => {
    return{
        type: ADD,
        payload: state
    };
}


export const deleteCart = (id:number) => ({
    type:DELETE,
    payload: id
})