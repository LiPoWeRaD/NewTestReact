import IBreeds from "./IBreeds"


export enum FETCH_BREEDS {
    FETCH_BREEDS_REQUEST = 'FETCH_BREEDS_REQUEST',
    FETCH_BREEDS_SUCCESS = 'FETCH_BREEDS_SUCCESS',
    FETCH_BREEDS_FAILURE = 'FETCH_BREEDS_FAILURE'
}

export type BreedsState = {
    breeds: IBreeds[],
    page: number,
    loading: boolean,
    error: null | string
}

export type BreedsAction = {
        type: FETCH_BREEDS.FETCH_BREEDS_REQUEST
    } | {
        type: FETCH_BREEDS.FETCH_BREEDS_SUCCESS
        payload: IBreeds[]
    } | {
        type: FETCH_BREEDS.FETCH_BREEDS_FAILURE
        payload: string
    }