import React from "react";
import { questions } from "../../data/Questions";

function Enonce({idQuestion}) {
    return(
        <h4>{questions[idQuestion].enonce}</h4>
    )
}

export default  Enonce