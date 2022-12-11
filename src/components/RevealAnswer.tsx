/* eslint-disable no-extra-parens */
import React, { useState } from "react";
// import { ItemTypes } from "../constants";
import { tileBedSquare } from "./data";
import TileItem from "./ItemTransformer";

export function RevealAnswer(): JSX.Element {
    const [lForward, isLForward] = useState<boolean>(true);
    const t = [tileBedSquare[0], tileBedSquare[1], tileBedSquare[2]];
    const [colTitle, setColTitle] = useState<string>("Lowest to Highest ");
    const [counter, setCounter] = useState<number>(0);
    // const [colName, setColName] = useState<string>("lime");

    function SortThrough(): void {
        if (lForward) {
            setColTitle("Highest to Lowest ");
        } else if (!lForward) {
            setColTitle("Lowest to Highest ");
        }
        isLForward(!lForward);
    }

    function FilterColor(): void {
        if (counter == 3) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }

    return (
        <div>
            {
                <div>
                    {" "}
                    <h5>Drag Task To The Calendar</h5>{" "}
                    <p>Green : Low Priority</p>
                    <p>Yellow : Med Priority</p>
                    <p>Red : High Priority</p>
                    <p></p>
                    <button onClick={SortThrough}> SORT: {colTitle} </button>
                    <button onClick={FilterColor}> - Filter - </button>
                    <p></p>
                    {counter == 0 && lForward && (
                        <>
                            <TileItem item={t[0]} width={85} height={75} />
                            <TileItem item={t[1]} width={85} height={75} />
                            <TileItem item={t[2]} width={85} height={75} />
                        </>
                    )}
                    {counter == 0 && !lForward && (
                        <>
                            <TileItem item={t[2]} width={85} height={75} />
                            <TileItem item={t[1]} width={85} height={75} />
                            <TileItem item={t[0]} width={85} height={75} />
                        </>
                    )}
                    {counter == 1 && (
                        <TileItem item={t[0]} width={85} height={75} />
                    )}
                    {counter == 2 && (
                        <TileItem item={t[1]} width={85} height={75} />
                    )}
                    {counter == 3 && (
                        <TileItem item={t[2]} width={85} height={75} />
                    )}
                </div>
            }
        </div>
    );
}
