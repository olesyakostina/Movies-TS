import React from "react";
import FilmItem from "./components/FilmItem";

import { IDataDetails } from "types/IDataDetails";

import "./style.css";

interface IFilmListParams {
    list: IDataDetails[];
}
const FilmsList: React.FC<IFilmListParams> = ({ list }) => {
    return (
        <div className="filmslist__wrapper">
            {list.map((film: IDataDetails) => (
                <FilmItem key={film.id} item={film} />
            ))}
        </div>
    );
};
export default FilmsList;
