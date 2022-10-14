import React, { useContext } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

import { ItemInfoEntityVM } from "../../model/ItemInfoEntity/index";
import { ProductsContext } from "../../core/ProductsContextProvider";

interface Props {
  product: ItemInfoEntityVM;
  assetPath: string;
}

export const ProductItem: React.FC<Props> = (props) => {
  const { product, assetPath } = props;
  const productsContext = useContext(ProductsContext);
  console.log("assetPath", `${assetPath}${product.picURL}`);

  return (
    <Card
      sx={{ maxWidth: 650, marginTop: 10 }}
      key={product.id}
      className="footballshirt-item"
    >
      <CardMedia
        component="img"
        height="200"
        //src={require(`${assetPath}${product.picURL}`)}
        src={require(`../../${assetPath}${product.picURL}`)}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {product.title} {product.selected}
        </Typography>
      </CardContent>
      <CardActions>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onClick={() => productsContext.addToCart(product)} />
            }
            label="Buy"
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};
