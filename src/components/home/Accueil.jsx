import React from "react";
import Form from "./Form";

function Accueil({ isBegin, setIsBegin, isEnd }) {
    // Nous testons si le quiz n'a pas débuté ou qu'il n'est pas terminé pour afficher la page de login
    if (!isBegin || !isEnd) {
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
            {/* Le composant form qui contient les zones de texte username et mail */}
            <Form hundleSubmit={() => setIsBegin(!isBegin)} />
        </div>
    )

}

export default Accueil;