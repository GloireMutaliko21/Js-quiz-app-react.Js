import React from "react";
// import { useState } from 'react'

// class Progression extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { sec: 60 };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.setSec(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     setSec() {
//         this.setState({
//             sec: this.state.sec - 1
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <span>{this.state.sec}.</span>
//             </div>
//         );
//     }
// }

function Clock(props) {
    return (
        <span>{props.miniteur}</span>
    )
}

// setInterval(Clock, 1000)

export default Clock