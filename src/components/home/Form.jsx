import React from "react";
import { useState } from "react";
import '../../styles/Form.css'

function Form({ hundleSubmit }) {
    const [nameValue, setNameValue] = useState("")
    const [mailValue, setMalilValue] = useState("")

    function isValidNom() {
        const validName = nameValue.trim().length
        const erreurNom = validName === 0 ?
            'Renseignez le nom' :
            validName < 2 ?
                'Entrer un nom valide' : null
        document.getElementById('errorNom').textContent = erreurNom
        return validName >= 2 ? true : false

    }

    function isValidMail() {
        const validMail = mailValue.trim().length
        const mailTest = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){2,}@((\[[0-9]\.[0-9]{2,}\.[0-9]{2,}\.[0-9]\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        const erreurMail = validMail == 0 ?
            'Renseignez votre mail' : mailTest.test(validMail) ?
                '' : 'Mail ivalide'
        document.getElementById('errorMail').textContent = erreurMail
        return mailTest.test(mailValue) ? true : false

    }

    return (
        <form className="home-form">
            <label>Nom</label>
            <input
                className="text-fields"
                value={nameValue}
                type="text"
                placeholder="Entrez votre nom"
                onChange={(e) => {
                    setNameValue(e.target.value)

                }}
            />
            <span id="errorNom"></span>
            <label>E-mail</label>
            <input
                className="text-fields"
                value={mailValue}
                type="text"
                placeholder="Entrez votre mail"
                onChange={(e) => {
                    setMalilValue(e.target.value)
                }}
            /><br />
            <span id="errorMail"></span>
            <input
                value="Commencer"
                className="bouton"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    isValidNom() && isValidMail() ? hundleSubmit() : isValidMail()
                }}
            />
        </form>

    )
}

export default Form