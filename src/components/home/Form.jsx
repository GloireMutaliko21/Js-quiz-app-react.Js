import React from "react";
import { useState } from "react";
import '../../styles/Form.css'

function Form({ hundleSubmit }) {
    const [nameValue, setNameValue] = useState("")
    const [mailValue, setMailValue] = useState("")

    return (
        <form className="home-form">
            <input
                className="text-fields"
                value={nameValue}
                type="text"
                placeholder="Entrez votre nom"
                onChange={(e) => setNameValue(e.target.value)}
            />
            <input
                className="text-fields"
                type="text"
                placeholder="Entrez votre mail"
                required
            /><br />
            <input
                value="Commencer"
                className="bouton"
                type="submit"
                onClick={() => hundleSubmit()}
            />
        </form>

    )
}

export default Form