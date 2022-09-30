import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { useMediaQuery } from "@mui/material";

import { FootballShirtsPage } from "../components/FootballShirts/FootballShirtsPage";
import { VideogamesPage } from "../components/Videogames/VideogamesPage";
import { Cart } from "../layout/Cart";
import { ItemInfoEntityVM } from '../model/ItemInfoEntity/index';
import { ProductsContextProvider } from './ProductsContextProvider';


const BoxSX = (isDesktop: boolean) => ({
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    padding: "0.5em"
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
                            <Route path="/" element={<FootballShirtsPage />} />
                            <Route path="/videogames" element={<VideogamesPage />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </Router>
                    <Divider orientation={orientation} variant="middle" flexItem sx={{ borderColor: "#A5A09F", padding: "5px", borderRightWidth: "medium" }} />
                    <Cart />
                </Box>
            </ProductsContextProvider>
        </>
    );
};