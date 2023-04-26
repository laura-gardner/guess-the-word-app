import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'


 const Wordle = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution) 
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  })
  
  
    return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
    </div>
  )
}

export default Wordle;