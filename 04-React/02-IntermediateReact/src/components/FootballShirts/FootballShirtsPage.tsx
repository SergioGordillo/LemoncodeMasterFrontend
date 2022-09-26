import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="links-wrapper">
                <Link to="/" className="navbar">Football Shirts</Link>
                <Link to="/videogames" className="navbar">Videogames</Link>
            </div>
            <div className="title-wrapper">
                <h2>Hello from Football Shirts Page</h2>
            </div>
            <div className="footballshirts-wrapper">
                {footballShirts.map((footballShirt) => (
                    <FootballShirtItem key={footballShirt.id} footballShirt={footballShirt} />
                ))}
            </div>
        </>
    );
};