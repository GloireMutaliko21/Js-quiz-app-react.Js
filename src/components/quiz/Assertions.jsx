import React from "react";
import { questions } from "../../data/Questions";
import '../../styles/assetions.css'

function Assertions({ idQuestion }) {
    return (
        <div>
            <ul>
                {questions[idQuestion].assertions.map((assertion, idx) => (
                    <div className="radio-bouton">
                        <label>
                            <li key={`${assertion}-${assertion}`}>
                                <input type="radio" id="choix1" name="choix" value="" />
                                <span>{assertion}</span>
                            </li>
                        </label>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default Assertions 