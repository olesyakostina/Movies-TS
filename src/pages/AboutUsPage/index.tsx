import React from "react";
import "./styles.css";
import routeMain from "./route";
import Emma from "./../../assets/Emma.png";


const AboutUsPage = () => {
    return (
        <div className="AboutUs__wrapper">
            <div>
                <img src={Emma} alt="Emma" />
            </div>
            <div className="AboutUs__info">
                <h2>MOVIESinfo</h2>
                <div className="AboutUs__info-elem">
                    <p>
                        - американская развлекательная компания, стриминговый
                        сервис фильмов и сериалов. Основана 29 августа 1997 года
                        Ридом Хастингсом и Марком Рэндольфом. Штаб-квартира
                        находится в Лос-Гатосе, Калифорния.
                    </p>
                    <p>
                        2013 года MOVIESinfo производит собственные фильмы и
                        сериалы, в том числе и анимационные, а также
                        телепрограммы. В 2016 году компания выпустила 126
                        оригинальных сериалов и фильмов — больше, чем любой
                        другой сетевой или кабельный канал.
                    </p>
                </div>
            </div>
        </div>
    );
};
export { routeMain };
export default AboutUsPage;
