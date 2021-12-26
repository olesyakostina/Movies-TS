import React, { useEffect } from "react";
import routeMain from "./route";
import FilmsList from "./../../components/FilmsList/index";

import { useDispatch, useSelector } from "react-redux";
import { loadAnimalsFilms } from "../../store/animals/actions";
import { selectData } from "../../store/animals/selectors";

import "./styles.css";

const FilmsCategoryPage = () => {
    const dispatch = useDispatch();
    const filmList = useSelector(selectData);

    useEffect(() => {
        dispatch(loadAnimalsFilms());
    }, [dispatch]);

    return (
        <div>
            <div className="categoryInfo-wrapper">
                <p className="categoryInfo">
                    Выбранная категория : <span> Comedy</span>
                </p>
            </div>
            {filmList.length > 0 && <FilmsList list={filmList} />}
        </div>
    );
};
export { routeMain };
export default FilmsCategoryPage;
