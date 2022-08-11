import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        {/* <img class="escudo" src="../assets/img/escudo-arsenal.jpg" alt="Escudo del Arsenal" /> */}
        <h1>Hello Gunners</h1>
        <h2>Welcome to your favourite gunner fan site</h2>
    </div>
);

console.log("Hi gunners");