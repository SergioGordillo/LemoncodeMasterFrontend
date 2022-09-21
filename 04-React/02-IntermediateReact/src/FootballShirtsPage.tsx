import React from "react";

import { Link } from "react-router-dom";

export const FootballShirtsPage: React.FC = () => {

    return (
        <>
            <Link to="/" className="navbar">Football Shirts</Link>
            <Link to="/videogames" className="navbar">Videogames</Link>
            <h2>Hello from Football Shirts Page</h2>
        </>
    );
};