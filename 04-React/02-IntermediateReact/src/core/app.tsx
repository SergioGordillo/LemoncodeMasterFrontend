import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Divider from '@mui/material/Divider';

import { FootballShirtsPage } from "../components/FootballShirts/FootballShirtsPage";
import { VideogamesPage } from "../components/Videogames/VideogamesPage";
import { Cart } from "../layout/Cart";

import useWindowDimensions from "../common-app/hooks/useWindowDimensions";

//SCREENWIDTH PARA PILLAR ANCHO CON JS, EXPLORAR

export const App = () => {

    const { width } = useWindowDimensions();

    return (
        <>
            <div className="wrapper-main-screen">
                <Router>
                    <Routes>
                        <Route path="/" element={<FootballShirtsPage />} />
                        <Route path="/videogames" element={<VideogamesPage />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
                <Divider orientation={(width < 1110) ? "horizontal" : "vertical"} variant="middle" flexItem sx={{ borderColor: "#A5A09F", padding: "5px", borderRightWidth: "medium" }} />
                <Cart />
            </div>
        </>
    );
};