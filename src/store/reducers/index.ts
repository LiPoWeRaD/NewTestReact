import { combineReducers } from "redux";
import { fetchBreedReducer, fetchBreedsReducer } from "./fetchStore";

export const rootReducer = combineReducers({
    fetchBreedsReducer,
    fetchBreedReducer,
})

export type RootState = ReturnType<typeof rootReducer>