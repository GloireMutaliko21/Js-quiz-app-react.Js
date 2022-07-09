import React from "react";
import { questions } from "../../data/Questions";
import '../../styles/assetions.css'

function Assertions(props) {
    return (
        <div className="radio-bouton">
            <label>
                <li>
                    <input type="radio" id="choix1" name="choix" />
                    <span>{props.value}</span>
                </li>
            </label>
        </div>
    )
}

export default Assertions 