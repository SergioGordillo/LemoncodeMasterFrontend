import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
const shield = require("../assets/img/escudo-arsenal.jpg");

const root = createRoot(document.getElementById("root"));


let hello: string = "Hello Gunners";
let subtitle: string = "Welcome to your favourite gunner fan site";

root.render(
    <div>
        <img className="escudo" src={shield} alt="Escudo del Arsenal" />
        <h1>{hello}</h1>
        <h2>{subtitle}</h2>
    </div>
);

console.log("Hi gunners");
console.log(`Api base: ${process.env.API_BASE}`);