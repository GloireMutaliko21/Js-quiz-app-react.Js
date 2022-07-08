import React from "react";
import Form from "./Form";

function Accueil({ isBegin, setIsBegin }) {
    if (!isBegin) {
        return null
    }
    return (
        <div>
            <h2>JavaScript Quiz</h2>
            <p >
                Evaluez vos compétences en JavaScript en répondant aux questions que
                nous avons spécialement sélectionnées pour vous. <br />C'est fun et
                c'est gratuit.
            </p>
            <Form hundleSubmit={() => setIsBegin(!isBegin)} />
        </div>
    )

}

export default Accueil;