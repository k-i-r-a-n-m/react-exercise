import React,{useState} from 'react'
import './App.css'

import StateHook from './components/useState.compnent.jsx'
import EffectHook from './components/useEffect.component.jsx'

function App() {
  const [dispalyUseState,setDispalyUseState] = useState(false)
  const [dispalyUseEffect,setDispalyUseEffect] = useState(false)
  
  function displayUseStateHandler(){
    setDispalyUseState(true)
    setDispalyUseEffect(false)
  }

  function displayUseEffectHandler(){
    setDispalyUseEffect(true)
    setDispalyUseState(false)
  }
  return (
    <>
      <button onClick={displayUseStateHandler}>useState()</button>
      <button onClick={displayUseEffectHandler}>useEffect()</button>
      {dispalyUseState && (<StateHook />)}
      {dispalyUseEffect && (<EffectHook />)}
      
    </>
  );
}

export default App;
