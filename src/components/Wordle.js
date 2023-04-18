import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'


 const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup } = useWordle(solution) 

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  })
    
  
  
    return (
    <div>
        <div>solution - {solution}</div>
        <div>Current guess - {currentGuess}</div>
    </div>
  )
}

export default Wordle;