import React from "react";
import { Link } from "react-router-dom";

import { getVideogames } from "./services/getData";

export const VideogamesPage: React.FC = () => {

    console.log(getVideogames());

    return (
        <>
            <Link to="/" className="navbar">Football Shirts</Link>
            <Link to="/videogames" className="navbar">Videogames</Link>
            <h2>Hello from Videogames Page</h2>
        </>
    );
};