import React, { useContext } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

import { ItemInfoEntity } from "../../model/ItemInfoEntity/index";
import { ProductsContext } from "../../core/ProductsContextProvider";

interface Props {
    footballShirt: ItemInfoEntity;
}

export const FootballShirtItem: React.FC<Props> = (props) => {

    const { footballShirt } = props;
    const myFootballShirts = useContext(ProductsContext);

    const addToCart = (e) => {
        console.log("Me clicko", e);
    }

    return (
        <Card sx={{ maxWidth: 650, marginTop: 10 }} key={footballShirt.id} className="footballshirt-item">
            <CardMedia component="img" height="200" src={`../../assets/footballshirts/${footballShirt.picURL}`} alt={footballShirt.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    {footballShirt.title} {myFootballShirts.selected}
                </Typography>
            </CardContent>
            <CardActions>
                <FormGroup>
                    <FormControlLabel control={<Checkbox onClick={addToCart} />} label="Buy" />
                </FormGroup>
            </CardActions>
        </Card>
    );
};