import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'


 const Wordle = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordle(solution) 
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  })
  
  
    return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
    </div>
  )
}

export default Wordle;