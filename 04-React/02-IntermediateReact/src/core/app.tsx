import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Divider from '@mui/material/Divider';

import { FootballShirtsPage } from "../components/FootballShirts/FootballShirtsPage";
import { VideogamesPage } from "../components/Videogames/VideogamesPage";
import { Cart } from "../layout/Cart";

export const App = () => {
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
            </div>

            <Divider orientation="vertical" variant="middle" flexItem />
            <Cart />
        </>
    );
};