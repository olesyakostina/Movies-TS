import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import filmsAnimalsReducer from "./animals/reducers";


const rootReducer = combineReducers({
    filmsAnimalsReducer,
   
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
