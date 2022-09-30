import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { getVideogames } from "../../api/index";
import { ItemInfoEntity } from "../../model/ItemInfoEntity/index";
import { mapItemInfoEntityFromAPIModelToVM } from "../../api/footballShirtFromAPIMToVM";
import { VideogamesItem } from "./VideogamesItem";

export const VideogamesPage: React.FC = () => {

    const [videogames, setVideogames] = useState<ItemInfoEntity[]>([]);

    useEffect(() => {
        getVideogames()
            .then((data) => {
                const videogamesVM = mapItemInfoEntityFromAPIModelToVM(data);
                console.log("videogamesVM", videogamesVM);
                setVideogames(videogamesVM);
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
                <h2>Hello from Videogames Page</h2>
            </div>
            <div className="videogames-wrapper">
                {videogames.map((videogame) => (
                    <VideogamesItem key={videogame.id} videogame={videogame} />
                ))}
            </div>
        </>
    );
};