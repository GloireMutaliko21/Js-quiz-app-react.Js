import React from "react";
import { questions } from "../../data/Questions";

function Assertions({idQuestion}) {
    return (
        <div>
            <ul>
                {questions[idQuestion].assertions.map((assertion, idx)=>(
                    <li key={`${assertion}-${assertion}`}>{assertion}</li>
                ))}
            </ul>
        </div>
    )
}

export default Assertions 