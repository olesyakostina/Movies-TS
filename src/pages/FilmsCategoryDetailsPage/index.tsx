import React, { useEffect } from "react";
import Star from "./../../assets/star.png";
import Oops from "./../../assets/oops.jpg";
import routeMain from "./route";

import { useParams } from "react-router-dom";
import { selectDetails } from "../../store/animals/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loadDetailFilms } from "../../store/animals/actions";
import { ID } from "types/ID";

import "./styles.css";

const FilmsCategoryDetailsPage = () => {
    const { id } = useParams<ID>();

    const dispatch = useDispatch();
    const detailList = useSelector(selectDetails);
    console.log(detailList);

    useEffect(() => {
        dispatch(loadDetailFilms(id));
    }, [dispatch, id]);

    return (
        <section className="newsDetailPage">
            {detailList ? (
                <div className="newsDetailPage__wrapper">
                    <div className="img">
                        {detailList.image ? (
                            <img
                                className="img"
                                src={detailList.image.medium}
                                alt="img"
                            />
                        ) : (
                            <div className="img">
                                <img
                                    className="img"
                                    src="https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"
                                    alt="img"
                                />
                            </div>
                        )}
                    </div>
                    <div className="newsDetailPage__info">
                        <div className="details_title__wrapper">
                            <h3 className="details_title">{detailList.name}</h3>
                            <div className="raiting">
                                <img
                                    className="details_title_star"
                                    src={Star}
                                    alt="star"
                                />
                                <p className="raiting">
                                    {detailList.rating ? (
                                        detailList.rating.average
                                    ) : (
                                        <img src={Oops} alt="oops" />
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="newsDetailPage__info-elem">
                            <div className="details">
                                <h4 className="title_p"> ГОД ВЫХОДА :</h4>
                                <p className="details-p premiered">
                                    {detailList.premiered}
                                </p>
                            </div>
                            <div className="details">
                                <h4 className="title_p"> СТРАНА :</h4>
                                <p className="details-p country">
                                    {detailList.network
                                        ? detailList.network.country.name
                                        : "country"}
                                </p>
                            </div>
                            <div className="details">
                                <h4 className="title_p "> ЖАНР :</h4>
                                <p className="details-p genre">
                                    {detailList.genres}
                                </p>
                            </div>
                            <div className="details">
                                <h4 className="title_p"> ОПИСАНИЕ: </h4>
                                <p className="details_summ">
                                    {detailList.summary}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <img src={Oops} alt="oops" />
                </div>
            )}
        </section>
    );
};
export { routeMain };
export default FilmsCategoryDetailsPage;
