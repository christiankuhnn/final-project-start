/* eslint-disable no-extra-parens */
import React from "react";
import TileItem from "./ItemTransformer";
import type { Tile } from "./card";
import { tileBedSquare } from "./data";
import "./styles.css";
// import { FilterNote } from "./filterModal";

// const filterList = () => {
//     return [];
// };
const TileSequence = () => {
    return (
        <div id="furniture-lit">
            <h4>Task:</h4>
            <p>Green : Low Priority</p>
            <p>Yellow : Medium Priority</p>
            <p>Red : High Priority</p>
            {/* <FilterNote filterList={filterList}></FilterNote> */}
            {tileBedSquare.map((f: Tile) => (
                <div key={f.name}>
                    Drag Task To Calendar
                    <TileItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default TileSequence;
