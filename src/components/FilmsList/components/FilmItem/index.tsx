import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsCategoryDetails } from "pages/FilmsCategoryDetailsPage";

import { IDataDetails } from "types/IDataDetails";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";

interface IFilmItemParams {
    item: IDataDetails;
}

const FilmItem: React.FC<IFilmItemParams> = ({ item }) => (
    <NavLink to={routeFilmsCategoryDetails(item.id)}>
        <div className="filmItem__item">
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={item.image["medium"]}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.genres}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        ></Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    </NavLink>
);

export default FilmItem;
