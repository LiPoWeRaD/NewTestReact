import { Dispatch } from "redux";
import axios from "axios";
import { BreedsAction, FETCH_BREEDS } from "../../types/fetchBreeds";
import { BreedAction, FETCH_BREED } from "../../types/fetchBreed";

import { api } from "../../api/api";

const API = axios.create({
    // baseURL: api,
    baseURL: "https://devapiservice.com/api/Testing/Cat",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `${api}`
    },
    withCredentials: false,
}); 

export const fetchBreed = (id: string) => {
    return async (dispatch: Dispatch<BreedAction>) => {
        dispatch({ type: FETCH_BREED.FETCH_BREED_REQUEST });
        await API.get(`https://devapiservice.com/api/Testing/Cat/${id}`).then(res => {
            dispatch({ type: FETCH_BREED.FETCH_BREED_SUCCESS, payload: res.data.data });
        }).catch(err => {
            dispatch({ type: FETCH_BREED.FETCH_BREED_FAILURE, payload: err.message });
        })
    };
}

export const fetchBreeds = (limit: number = 10, page: number = 0) => {
    return async (dispatch: Dispatch<BreedsAction>) => {
        dispatch({ type: FETCH_BREEDS.FETCH_BREEDS_REQUEST });
        await API.get(`https://devapiservice.com/api/Testing/Cat?perPage=${limit}&page=${page}`).then(res => {
            dispatch({ type: FETCH_BREEDS.FETCH_BREEDS_SUCCESS, payload: res.data.data });
        }).catch(err => {
            dispatch({ type: FETCH_BREEDS.FETCH_BREEDS_FAILURE, payload: err.message });
        })
    };
}
