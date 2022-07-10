import React from "react";
import { useTimer } from 'use-timer';
import { questions } from "../../data/Questions";
import Assertions from "./Assertions";
import { useState } from "react";
import Enonce from "./Enonce";
import Progression from "./Progress";
import '../../styles/progress.css';

function Quiz({ isBegin, setIsBegin }) {
    const [idQuestion, setIdQuestion] = useState(0)
    const [disable, setDisable] = useState(true)

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

    const assertions = questions[idQuestion].assertions
        .map((assertion, idx) =>
            <Assertions
                key={`${assertion}-${idx}`}
                value={assertion}
                onChange={() => {
                    setDisable(false)
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
                    // setIsBegin(!isBegin);
                    setIdQuestion(idQuestion + 1);
                    setDisable(!disable)
                    reset();
                    start();
                }}
            />
        </div>
    )

}

export default Quiz;