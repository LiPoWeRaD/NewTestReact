import { FETCH_BREEDS, BreedsAction, BreedsState } from "../../types/fetchBreeds";
import { FETCH_BREED, BreedAction, BreedState } from "../../types/fetchBreed";

const initialBreedsState: BreedsState = {
    breeds: [],
    page: 0,
    loading: false,
    error: null
}

const initialBreedState: BreedState = {
    breed: {id: "", name: "", temperament: "", origin: "", life_span: "", image: ""},
    page: 0,
    loading: false,
    error: null
}


export const fetchBreedReducer = (state = initialBreedState, action: BreedAction) => {
    switch (action.type) {
        case FETCH_BREED.FETCH_BREED_REQUEST:
            return { ...state, loading: true }
        case FETCH_BREED.FETCH_BREED_SUCCESS:
            return { ...state, breed: action.payload, page: state.page, loading: false, error: null }
        case FETCH_BREED.FETCH_BREED_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}


export const fetchBreedsReducer = (state = initialBreedsState, action: BreedsAction) => {
    switch (action.type) {
        case FETCH_BREEDS.FETCH_BREEDS_REQUEST:
            return { ...state, loading: true }
        case FETCH_BREEDS.FETCH_BREEDS_SUCCESS:
            return { ...state, breeds: action.payload, page: state.page, loading: false, error: null }
        case FETCH_BREEDS.FETCH_BREEDS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}