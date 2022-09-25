import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FootballShirtsPage } from "../components/FootballShirts/FootballShirtsPage";
import { VideogamesPage } from "../components/Videogames/VideogamesPage";





export const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<FootballShirtsPage />} />
                    <Route path="/videogames" element={<VideogamesPage />} />
                </Routes>
            </Router>
        </>
    );
};