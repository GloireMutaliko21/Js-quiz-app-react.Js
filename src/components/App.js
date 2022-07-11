import React from 'react';
import { useState } from "react";
import Accueil from './home/Accueil';
import '../styles/app.css'
import Quiz from './quiz/Quiz';
import Result from './res/Result';

function App() {
  const [isBegin, setIsBegin] = useState([])
  const [isEnd, setIsEnd] = useState([])
  const [score, setScore] = useState(0)

  return (
    <div className='container'>
      <Accueil
        isBegin={isBegin}
        setIsBegin={setIsBegin}
        isEnd={isEnd}
      />
      <Quiz
        isBegin={isBegin}
        setIsBegin={setIsBegin}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
        score={score}
        setScore={setScore}
      />
      <Result
        isBegin={isBegin}
        setIsBegin={setIsBegin}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
        score={score}
        setScore={setScore}
      />
    </div>
  )
}

export default App;
