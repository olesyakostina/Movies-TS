import { IStore } from "store/types";


import filmsAnimalsReducer from "./reducers";

export const selectData = (state:{filmsAnimalsReducer:IStore}) => state.filmsAnimalsReducer.data;
export const selectDetails = (state:{filmsAnimalsReducer:IStore}) => state.filmsAnimalsReducer.details;
