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

    const { time, start, reset } = useTimer({
        endTime: -1,
        initialTime: 60,
        timerType: 'DECREMENTAL',
        autostart: !isBegin,
        onTimeOver: () => {
            setIdQuestion(idQuestion + 1)
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
                className="bouton"
                type="submit"
                value="Suivant"
                onClick={() => {
                    // setIsBegin(!isBegin);
                    setIdQuestion(idQuestion + 1);
                    reset();
                    start();
                }}
            />
        </div>
    )

}

export default Quiz;