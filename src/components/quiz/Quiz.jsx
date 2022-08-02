import React, { useState } from "react";
import { useTimer } from 'use-timer';
import { questions } from "../../data/Questions";
import Assertions from "./Assertions";
import Enonce from "./Enonce";
import Progression from "./Progress";
import '../../styles/boutonsQuitter.css'

function Quiz({ isBegin, setIsBegin, setIsEnd, score, setScore }) {

    //Les états propres au composant
    const [idQuestion, setIdQuestion] = useState(0)
    const [disable, setDisable] = useState(true)
    const [reponseUser, setReponseUser] = useState()

    // Ceci est le miniteur avec la librairie useTimer qu'il faut installer : La réponse doit être fournie dans 60 secondes
    const { time, start, reset } = useTimer({
        endTime: -1,
        initialTime: 60,
        timerType: 'DECREMENTAL',
        autostart: !isBegin,
        onTimeOver: () => {
            setDisable(true)
            questionSuivante()
        }
    });

    // Cette condition vérifie si le quiz a commencé pour pouvoir affiché le composant Quiz
    // Bien que la condition est à l'envers, ... comprenez... (Référez-vous au composant Accueil)
    if (isBegin) {
        return null
    }

    // Cette fonction permet d'incrémenter le score de l'utilisateur quand sa réponse est bonne
    function scoreIncrease() {
        if (reponseUser === questions[idQuestion].reponse) {
            setScore(score + 1)
        }
    }

    /* Cette fonction permet de passer d'une question à la suivante
       Nous passons à la question suivante quand il y a encore au moins une question non répondue
       Dans le cas contraire, nous passons au résultat avec setEnd(false) : Ici aussi, comprenez c'est à l'envers
       A chaque passage nous réinitialisons le miniteur et le déclenchons ensuite
       Quand le quiz est terminé, nous rénitialisons le numéro de la question à 0 avec setIdQuestion(0)
       En fin, à chaque passage, nous testons le score de l'utilisateur */
    function questionSuivante() {
        if (idQuestion < 14) {
            setIdQuestion(idQuestion + 1);
            reset();
            start();
        } else {
            setIdQuestion(0)
            reset()
            setIsBegin(!isBegin)
            setIsEnd(false)
        }
        scoreIncrease()
    }

    /* Cette variable nous retourne les assertions pour la question correspondante
        A chaque changement, nous modifions la réponse de l'utilisateur en fonction de l'assertion qu'il a coché
        Nous activons également le bouton "Suivant" quand une assertion est cochée
        La logique est telle qu'il ne peut pas aller sur suivant sans avoir répondu */
    const assertions = questions[idQuestion].assertions
        .map((assertion, idx) =>
            <Assertions
                key={`${assertion}-${idx}`}
                value={assertion}
                onChange={() => {
                    setDisable(false)
                    setReponseUser(assertion);
                }
                }
            />
        );

    return (
        <div>
            <Enonce idQuestion={idQuestion} />
            <Progression
                idQuestion={idQuestion + 1}
                sec={time}
            />

            <ul>
                {assertions}
            </ul>
            {/* Le bouton  */}
            <div className="quitter-suivant">
                {/* Le bouton quitter nous amène à la page de résultat avec le score actuel de l'utilisateur
                    Nous rénitialisons en même temps le numéro de la question, disons que le quiz est terminé avec setIsEnd(false) : à l'envers
                    Nous testons son score pour savoir s'il va augmenter dans le cas où il aurait cliqué sur quitter en ayant coché une réponse
                    Nous réinitialisons aussi le miniteur */}
                <input
                    type="submit"
                    value="Quitter"
                    id="quitter"
                    onClick={() => {
                        setIdQuestion(0)
                        reset()
                        setIsBegin(!isBegin)
                        setIsEnd(false)
                        scoreIncrease()
                    }}
                />

                {/* Le bouton suivant : pour passer à la queston suivante
                    Il appelle la fonction questionSuivante et change l'état d'activation de lui-même */}
                <input
                    disabled={disable}
                    className="bouton"
                    id="suivant"
                    type="submit"
                    value="Suivant"
                    onClick={() => {
                        questionSuivante()
                        setDisable(!disable)
                    }}
                />
            </div>

        </div>
    )

}

export default Quiz;