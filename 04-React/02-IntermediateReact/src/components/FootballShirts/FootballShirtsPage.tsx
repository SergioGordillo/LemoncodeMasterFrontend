import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { getFootballShirts } from "../../api/getData";
import { ItemInfoEntity } from "../../model/model";
import { FootballShirtItem } from "./FootballShirtItem";

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
            <div className="footballshirts-wrapper">
                {footballShirts.map((footballShirt) => (
                    <FootballShirtItem key={footballShirt.id} footballShirt={footballShirt} />
                ))}
            </div>
        </>
    );
};