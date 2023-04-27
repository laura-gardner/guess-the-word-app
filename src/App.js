import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";
import words from "./data/words"

const App = () => {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
      const randomSolution = words[Math.floor(Math.random()*words.length)]
      setSolution(randomSolution.word)
    }, [])

  return (
    <div className="App">
      <h1>Guess the Word</h1> 
      {solution && < Wordle solution={solution}/>}   
    </div>
  );
}

export default App;
