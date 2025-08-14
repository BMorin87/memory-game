import { useState } from 'react'
import '../styles/App.css'
import Scoreboard from './Scoreboard'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <div className="header">
        <h1>Memory Game</h1>
        <p>Get points by clicking a character but don't click any more than once!</p>
        <Scoreboard score={score} bestScore={bestScore} />
      </div>
      <div className="card-container">

      </div>
    </>
  )
}

export default App
