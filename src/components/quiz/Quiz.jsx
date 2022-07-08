import React from "react";
import { questions } from "../../data/Questions";
import Assertions from "./Assertions";
import { useState } from "react";

function Quiz({ isBegin, setIsBegin }) {
    const [idQuestion, setIdQuestion] = useState(0)
    if (isBegin) {
        return null
    }
    return (
        <div>
            <Assertions idQuestion={idQuestion}/>
            <input className = "bouton" type="submit" value="Suivant" onClick={() => {
                // setIsBegin(!isBegin);
                setIdQuestion(idQuestion+1)
            }} />
        </div>
    )

}

export default Quiz;