import React from "react";
import '../../styles/progress.css';

function Progression({ sec, idQuestion }) {

    return (
        <div>
            <div className="progress">
                <span className="progress-questions">Question {idQuestion}/15</span>
                <span id="progressTime">{sec}</span>
            </div>


            <div className="progress-bar">
                <div
                    className="font-progress-bar"
                    style={
                        {
                            "width": sec * (100 / 60) + "%",
                            "height": 8,
                            "borderRadius": 3,
                            "background": "linear-gradient(90deg, #05493e 0%, rgba(3, 59, 124, 0.85) 99.84%)",
                            "transition": "all  0.2s ease-out"
                        }
                    }
                >
                </div>
            </div>
        </div>
    );
}


export default Progression