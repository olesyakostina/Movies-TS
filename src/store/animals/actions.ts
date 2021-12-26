import getAnimalsMovies from "../../services/getAnimalsMovies";
import getDetail from "./../../services/getDetail";
import { Dispatch } from "redux";
import { IStore } from "store/types";

export const setAnimalsFilmsActions = (data: IStore['data']) => {
    return {
        type: "animals/setAnimalFilms",
        payload: data,
    };
};

export const loadAnimalsFilms = () => async (dispatch: Dispatch) => {
    try {
        const responce = await getAnimalsMovies();
        dispatch(setAnimalsFilmsActions(responce.data));
    } catch (e) {
        console.error(e);
    }
};
//-----------------------------------------------------------
export const setDetailFilmsActions = (data: IStore['data']) => {
    return {
        type: "animals/setDetailsFilms",
        payload: data,
    };
};
export const loadDetailFilms = (id: string) => async (dispatch: Dispatch) => {
    try {
        const responce = await getDetail(id);
        // console.log("ответ", responce.data.id);
        dispatch(setDetailFilmsActions(responce.data));
        // console.log(dispatch(setDetailFilmsActions(responce.data)));
        console.log(setDetailFilmsActions(responce.data));
    } catch (e) {
        console.error(e);
    }
};
