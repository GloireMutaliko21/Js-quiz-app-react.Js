import React from "react";
import { useState } from "react";
import '../../styles/Form.css'
import { user } from "../../data/User";

function Form({ hundleSubmit }) {
    // Les états propres au formulaire
    const [nameValue, setNameValue] = useState("")
    const [mailValue, setMalilValue] = useState("")

    // Cette fonctioin vérifie la validité du username fourni par l'utilisateur
    function isValidNom() {
        const validName = nameValue.trim().length
        const erreurNom = validName === 0 ?
            'Renseignez le nom' :
            validName < 2 ?
                'Entrer un nom valide' : null
        document.getElementById('errorNom').textContent = erreurNom

        /* Cette condition permet de conserver le username quand il est valide 
         pour pouvoir l'afficher à la page de résutat 
         Nous retournons également true/false selon que ce username est valide ou non*/
        if (validName >= 2) {
            user.userName = nameValue
            return true
        }
        return false

    }

    // Cette fonction vérifie la validité d'une adresse mail à partir des expressions régulières
    function isValidMail() {
        const validMail = mailValue.trim().length
        const mailTest = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){2,}@((\[[0-9]\.[0-9]{2,}\.[0-9]{2,}\.[0-9]\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        const erreurMail = validMail === 0 ?
            'Renseignez votre mail' : mailTest.test(validMail) ?
                '' : 'Mail ivalide'
        document.getElementById('errorMail').textContent = erreurMail

        /* Cette condition permet de conserver le mail quand il est valide 
         pour pouvoir l'afficher à la page de résutat 
         Nous retournons également true/false selon que ce mail est valide ou non*/
        if (mailTest.test(mailValue)) {
            user.userMail = mailValue
            return true
        }
        return false

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
                    isValidNom() && isValidMail() ? hundleSubmit() : null
                }}
            />

        </form>
    )
}

export default Form