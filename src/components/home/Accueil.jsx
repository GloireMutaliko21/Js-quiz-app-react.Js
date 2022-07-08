import React from "react";

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
            <input type="submit" value="Commencer" onClick={() => {
                setIsBegin(!isBegin);
            }} />
        </div>
    )

}

export default Accueil;