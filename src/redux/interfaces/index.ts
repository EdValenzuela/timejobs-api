
export interface PropsTitle {
    title: string;
}

interface ICredits{
    name :string;
    autor:string;
}

export interface PropsCredits{
    item: ICredits
}

export interface ICateg{
    name :string;
}

export interface PropsCat{
    item: ICateg
}

export interface DataState {
    data : [],
    isFetching: false,
    error: null
}