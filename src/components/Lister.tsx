/* eslint-disable no-extra-parens */
import React from "react";
import TileItem from "./ItemTransformer";
import type { Tile } from "./card";
import { tileBedSquare } from "./data";
import "./styles.css";

const TileSequence = () => {
    return (
        <div id="furniture-list">
            <h4>Card </h4>
            <p>low - high priority</p>
            {tileBedSquare.map((f: Tile) => (
                <div key={f.name}>
                    {f.name + f.priority}
                    <TileItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default TileSequence;
