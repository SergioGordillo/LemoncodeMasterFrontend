import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from '@mui/material/Typography';

import { ItemInfoEntity } from "../../model/model";

interface Props {
    footballShirt: ItemInfoEntity;
}

export const FootballShirtItem: React.FC<Props> = (props) => {

    const { footballShirt } = props;

    return (
        <Card sx={{ maxWidth: 650 }} key={footballShirt.id} className="footballshirt-item">
            <CardMedia component="img" height="200" src={`../../assets/footballshirts/${footballShirt.picURL}`} alt={footballShirt.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {footballShirt.title}
                </Typography>
            </CardContent>
        </Card>
    );
};