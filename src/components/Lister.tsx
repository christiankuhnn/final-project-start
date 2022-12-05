/* eslint-disable no-extra-parens */
import React from "react";
import TileItem from "./ItemTransformer";
import type { Tile } from "./card";
import { tileBedSquare } from "./data";
import "./styles.css";

const c = 0;
const TileSequence = () => {
    return (
        <div id="furniture-list">
            <h4>Card </h4>
            <p>low - high priority</p>
            {tileBedSquare.map((f: Tile) => (
<<<<<<< editTaskCards
                <div key={f.name}>
                    {f.name + f.priority}
=======
                <div key={"Hello"}>
                    <p className="furniture-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
>>>>>>> main
                    <TileItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default TileSequence;
