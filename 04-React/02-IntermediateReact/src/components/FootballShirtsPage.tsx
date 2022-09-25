import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { getFootballShirts } from "../api/getData";
import { ItemInfoEntity } from "../model/model";

export const FootballShirtsPage: React.FC = () => {

    const [footballShirts, setFootballShirts] = useState<ItemInfoEntity[]>([]);

    useEffect(() => {
        getFootballShirts()
            .then((data) => {
                console.log(data);
                setFootballShirts(data);
            }
            );
    }, [])

    return (
        <>
            <Link to="/" className="navbar">Football Shirts</Link>
            <Link to="/videogames" className="navbar">Videogames</Link>
            <h2>Hello from Football Shirts Page</h2>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    { }
                </CardContent>
            </Card>
        </>
    );
};