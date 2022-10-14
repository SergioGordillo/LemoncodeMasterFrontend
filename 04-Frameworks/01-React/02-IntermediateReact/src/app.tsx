import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";

import { Cart } from "./layout/Cart";
import { ProductsContextProvider } from "./core/ProductsContextProvider";
import { TShirtsScene } from "./scenes/tshirts.scene";
import { VideogamesScene } from "./scenes/videogames.scene";

const BoxSX = (isDesktop: boolean) => ({
  display: "flex",
  flexDirection: isDesktop ? "row" : "column",
  padding: "0.5em",
});

export const App = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const orientation = isDesktop ? "vertical" : "horizontal";

  return (
    <>
      <ProductsContextProvider>
        <Box className="wrapper-main-screen" sx={BoxSX(isDesktop)}>
          <Router>
            <Routes>
              <Route path="/" element={<TShirtsScene />} />
              <Route path="/videogames" element={<VideogamesScene />} />
            </Routes>
          </Router>
          <Divider
            orientation={orientation}
            variant="middle"
            flexItem
            sx={{
              borderColor: "#A5A09F",
              padding: "5px",
              borderRightWidth: "medium",
            }}
          />
          <Cart />
        </Box>
      </ProductsContextProvider>
    </>
  );
};
