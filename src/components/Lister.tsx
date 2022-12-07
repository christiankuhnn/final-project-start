/* eslint-disable no-extra-parens */
import React from "react";
import "./styles.css";
import { RevealAnswer } from "./RevealAnswer";
// import { FilterNote } from "./filterModal";

const TileSequence = () => {
    return (
        <div id="furniture-lit">
            <h4>Task:</h4>
            {/* <FilterNote filterList={filterList}></FilterNote> */}
            <RevealAnswer></RevealAnswer>
        </div>
    );
};

export default TileSequence;
