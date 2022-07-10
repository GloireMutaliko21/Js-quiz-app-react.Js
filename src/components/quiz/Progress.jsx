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
                            "backgroundColor": "#028A3D",
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