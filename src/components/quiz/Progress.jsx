import React from "react";
import '../../styles/progress.css';

class Progression extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sec: 60 };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setSec(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    setSec() {
        this.setState({
            sec: this.state.sec - 1
        });
    }

    render() {
        return (
            <div>
                <div className="progress">
                    <span className="progress-questions">Question {this.props.idQuestion}/15</span>
                    <span id="progressTime">{this.state.sec}</span>
                </div>


                <div className="progress-bar">
                    <div
                        className="font-progress-bar"
                        style={
                            {
                                "width": this.state.sec * (100 / 60) + "%",
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
}


export default Progression