import React from "react";
import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
    return (
        <div>
            {guesses.map((guess, index) => {
                if (turn === index) {
                    return <Row key={index} currentGuess={currentGuess}/>
                }
                return <Row key={index} guess={guess}/> 
            })}
        </div>
    )
}

export default Grid;