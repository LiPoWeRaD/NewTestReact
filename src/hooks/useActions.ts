import { useDispatch } from "react-redux";
import * as animal from "../store/action-creators/AnimalsStore";
import { bindActionCreators } from "redux";

const data = {...animal}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(data, dispatch);
}