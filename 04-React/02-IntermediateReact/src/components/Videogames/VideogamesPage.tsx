import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getVideogames } from "../../api/getData";
import { ItemInfoEntity } from "../../model/model";
import { VideogamesItem } from "./VideogamesItem";

export const VideogamesPage: React.FC = () => {

    const [videogames, setVideogames] = useState<ItemInfoEntity[]>([]);

    useEffect(() => {
        getVideogames()
            .then((data) => {
                console.log(data);
                setVideogames(data);
            }
            );
    }, [])

    return (
        <>
            <Link to="/" className="navbar">Football Shirts</Link>
            <Link to="/videogames" className="navbar">Videogames</Link>
            <h2>Hello from Videogames Page</h2>
            <div className="videogames-wrapper">
                {videogames.map((videogame) => (
                    <VideogamesItem key={videogame.id} videogame={videogame} />
                ))}
            </div>
        </>
    );
};