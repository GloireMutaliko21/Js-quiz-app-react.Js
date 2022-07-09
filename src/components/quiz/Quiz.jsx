import React from "react";
import { questions } from "../../data/Questions";
import Assertions from "./Assertions";
import { useState } from "react";
import Enonce from "./Enonce";
import Progression from "./Progress";

function Quiz({ isBegin, setIsBegin }) {
    const [idQuestion, setIdQuestion] = useState(0)
    if (isBegin) {
        return null
    }
    const assertions = questions[idQuestion].assertions.map((assertion, idx) =>
        <Assertions key={`${assertion}-${idx}`} value={assertion} />
    );
    return (
        <div>
            <Enonce idQuestion={idQuestion} />
            <Progression idQuestion={idQuestion+1}/>
            <ul>
                {assertions}
            </ul>
            <input className="bouton" type="submit" value="Suivant" onClick={() => {
                // setIsBegin(!isBegin);
                setIdQuestion(idQuestion + 1)
            }} />
        </div>
    )

}

export default Quiz;