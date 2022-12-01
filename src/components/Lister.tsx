/* eslint-disable no-extra-parens */
import React from "react";
import TileItem from "./ItemTransformer";
import type { Tile } from "./card";
import { tileBedSquare } from "./data";
import "./styles.css";

const TileSequence = () => {
    return (
        <div id="furniture-list">
            {tileBedSquare.map((f: Tile) => (
                <div key={f.name}>
                    <p className="furniture-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <TileItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default TileSequence;
