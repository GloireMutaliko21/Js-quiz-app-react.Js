import React from 'react';
import { useState } from "react";
import Accueil from './Accueil';
import '../styles/app.css'

function App(props) {
  const [isBegin, setIsBegin] = useState([])
  return (
    <div className='container'>
      <Accueil isBegin={isBegin} setIsBegin={setIsBegin}/>
    </div>
  )
}

export default App;
