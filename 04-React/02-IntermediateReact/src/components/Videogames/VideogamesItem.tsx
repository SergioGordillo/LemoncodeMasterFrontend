import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from '@mui/material/Typography';

import { ItemInfoEntity } from "../../model/model";

interface Props {
    videogame: ItemInfoEntity;
}

export const VideogamesItem: React.FC<Props> = (props) => {

    const { videogame } = props;

    return (
        <Card sx={{ maxWidth: 650 }} key={videogame.id} className="videogames-item">
            <CardMedia component="img" height="200" src={`../../assets/videogames/${videogame.picURL}`} alt={videogame.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {videogame.title}
                </Typography>
            </CardContent>
        </Card>
    );
};