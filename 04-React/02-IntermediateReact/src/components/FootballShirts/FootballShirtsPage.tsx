import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { getFootballShirts } from "../../api/index";
import { ItemInfoEntityVM } from '../../model/ItemInfoEntity/index';
import { FootballShirtItem } from "./FootballShirtItem";
import { mapItemInfoEntityFromAPIModelToVM } from "../../api/footballShirtFromAPIMToVM";


export const FootballShirtsPage: React.FC = () => {

    const [footballShirts, setFootballShirts] = useState<ItemInfoEntityVM[]>([]);

    useEffect(() => {
        getFootballShirts()
            .then((data) => {
                const footballShirtsVM = mapItemInfoEntityFromAPIModelToVM(data);
                setFootballShirts(footballShirtsVM);
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