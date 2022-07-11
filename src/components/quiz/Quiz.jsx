import React from "react";
import { useTimer } from 'use-timer';
import { questions } from "../../data/Questions";
import Assertions from "./Assertions";
import { useState } from "react";
import Enonce from "./Enonce";
import Progression from "./Progress";
import '../../styles/progress.css';

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
            setIdQuestion(idQuestion + 1)
            setDisable(true)
            reset()
            start()
        }
    });

    if (isBegin) {
        return null
    }

    function scoreIncrease() {
        reponseUser === questions[idQuestion].reponse ?
            setScore(score + 1) : null
    }

    const assertions = questions[idQuestion].assertions
        .map((assertion, idx) =>
            <Assertions
                key={`${assertion}-${idx}`}
                value={assertion}
                onChange={() => {
                    setDisable(false)
                    setReponseUser(assertion);
                    // console.log(assertion)
                    // console.log(reponseUser)

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

            <input
                disabled={disable}
                className="bouton"
                id="suivant"
                type="submit"
                value="Suivant"
                onClick={() => {
                    // 
                    if (idQuestion < 14) {
                        setIdQuestion(idQuestion + 1);
                        reset();
                        start();
                    } else {
                        // console.log(score)
                        // console.log(reponseUser)
                        setIdQuestion(0)
                        reset()
                        setIsBegin(!isBegin)
                        setIsEnd(false)
                    }
                    scoreIncrease()
                    setDisable(!disable)
                    console.log(reponseUser === questions[idQuestion].reponse)
                    console.log(score)


                }}
            />
        </div>
    )

}

export default Quiz;