import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { useMediaQuery } from "@mui/material";

import { FootballShirtsPage } from "../components/FootballShirts/FootballShirtsPage";
import { VideogamesPage } from "../components/Videogames/VideogamesPage";
import { Cart } from "../layout/Cart";

import useWindowDimensions from "../common-app/hooks/useWindowDimensions";


const BoxSX = (isDesktop: boolean) => ({
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    padding: "0.5em"
});

export const App = () => {
    const { width } = useWindowDimensions();
    const isDesktop = useMediaQuery("(min-width:1110px)");
    const orientation = isDesktop ? "vertical" : "horizontal";
    console.log("width", width);



    return (
        <>
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
        </>
    );
};