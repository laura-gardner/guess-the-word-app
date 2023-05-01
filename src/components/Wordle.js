import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import Error from './Error'


 const Wordle = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys, messageStatus } = useWordle(solution) 

  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  
  
    return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
      {messageStatus && <Error messageStatus={messageStatus}/>}
    </div>
  )
}

export default Wordle;