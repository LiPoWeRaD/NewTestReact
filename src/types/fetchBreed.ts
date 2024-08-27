import IBreeds from "./IBreeds"


export enum FETCH_BREED {
    FETCH_BREED_REQUEST = 'FETCH_BREED_REQUEST',
    FETCH_BREED_SUCCESS = 'FETCH_BREED_SUCCESS',
    FETCH_BREED_FAILURE = 'FETCH_BREED_FAILURE'
}

export type BreedState = {
    breed: IBreeds,
    page: number,
    loading: boolean,
    error: null | string
}

export type BreedAction = {
        type: FETCH_BREED.FETCH_BREED_REQUEST
    } | {
        type: FETCH_BREED.FETCH_BREED_SUCCESS
        payload: IBreeds
    } | {
        type: FETCH_BREED.FETCH_BREED_FAILURE
        payload: string
    }