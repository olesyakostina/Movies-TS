import { AnyAction } from "redux";
import { IStore } from "store/types";


const initialState = {
    data: [],
    details: null, 
   
};

const filmsAnimalsReducer = (
    state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case "animals/setAnimalFilms":
            return { ...state, data: [...action.payload] };
        case "animals/setDetailsFilms":
            return { ...state, details: action.payload };
        default:
            return state;
    }
};
export default filmsAnimalsReducer;
