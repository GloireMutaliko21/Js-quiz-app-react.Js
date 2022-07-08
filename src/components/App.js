import React from 'react';
import { useState } from "react";
import Accueil from './home/Accueil';
import '../styles/app.css'
import Quiz from './quiz/Quiz';

function App() {
  const [isBegin, setIsBegin] = useState([])
  return (
    <div className='container'>
      <Accueil isBegin={isBegin} setIsBegin={setIsBegin}/>
      <Quiz isBegin={isBegin} setIsBegin={setIsBegin}/>
    </div>
  )
}

export default App;
