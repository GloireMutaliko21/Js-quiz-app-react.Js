import React, { useState } from "react";
import { useTimer } from 'use-timer';
import { questions } from "../../data/Questions";
import Assertions from "./Assertions";
import Enonce from "./Enonce";
import Progression from "./Progress";
import '../../styles/boutonsQuitter.css'

function Quiz({ isBegin, setIsBegin, isEnd, setIsEnd, score, setScore }) {
    const [idQuestion, setIdQuestion] = useState(0)
    const [disable, setDisable] = useState(true)
    const [reponseUser, setReponseUser] = useState()

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

    if (isBegin) {
        return null
    }

    function scoreIncrease() {
        reponseUser === questions[idQuestion].reponse ?
            setScore(score + 1) : null
    }

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
            <div className="quitter-suivant">
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