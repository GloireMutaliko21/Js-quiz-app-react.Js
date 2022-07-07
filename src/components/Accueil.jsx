import React from "react";
import { useState } from "react";

function Accueil(props) {
     return (
        <div>
            <h2>JavaScript Quiz</h2>
            <p >
                Evaluez vos compétences en JavaScript en répondant aux questions que
                nous avons spécialement sélectionnées pour vous. <br />C'est fun et
                c'est gratuit.
            </p>
            <input type="submit" value="Commencer" onClick={()=>{}}/>
        </div>
    )

}

export default Accueil;