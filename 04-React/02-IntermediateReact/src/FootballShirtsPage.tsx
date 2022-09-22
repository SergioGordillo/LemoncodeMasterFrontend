import React from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { getFootballShirts } from "./services/getData";

export const FootballShirtsPage: React.FC = () => {

    console.log(getFootballShirts());

    return (
        <>
            <Link to="/" className="navbar">Football Shirts</Link>
            <Link to="/videogames" className="navbar">Videogames</Link>
            <h2>Hello from Football Shirts Page</h2>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    //TODO: Create a json with all the data of the images, create a service and consume it from here
                </CardContent>
            </Card>
        </>
    );
};