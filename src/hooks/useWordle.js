import { useState } from 'react';

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)



    // format guess into an array of letter objects
    // e.g. [{key: 'a', colorL 'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        })
        // find any letters in the correct position and color -> green
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }        
        })

        //find any letters in the wrong position and color -> yellow
        formattedGuess.forEach((letter, index) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses(prevGuesses => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory(prevHistory => {
            return [...prevHistory, currentGuess]
        })
        setTurn(prevTurn => prevTurn + 1)
        setCurrentGuess('')
    }

    // handle keyup event and track current guess
    // if user presses enter, add the new guess  
    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            // only add guess if turn < 5
            if (turn > 5) {
                console.log('You have used all your guesses')
                return
            }
            // only add guess if word has not already been guessed
            if (history.includes(currentGuess)) {
                console.log('You have already guessed that word')
                return
            }
            // only add guess if guess.length === 5
            if (currentGuess.length !== 5) {
                console.log("This guess doesn't have enough letters")
                return
            }
            
            const formatted = formatGuess()
            addNewGuess(formatted)
        }

        if (key === 'Backspace') {
            setCurrentGuess(prev => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle;