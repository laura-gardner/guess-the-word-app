import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'


 const Wordle = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution) 
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      console.log("Congrats, you win!")
      window.removeEventListener('keyup', handleKeyup)
    }

    if (turn > 5) {
      console.log("Unlucky, you're out of guesses")
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  
  
    return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
    </div>
  )
}

export default Wordle;