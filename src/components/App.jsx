import { useState } from 'react'
import '../styles/App.css'
import Scoreboard from './Scoreboard'
import Card from './Card'
import DataFetcher from './DataFetcher'

const fetcher = new DataFetcher();
const data = await fetcher.GetEuropeanDogIDs();
const promises = data.objectIDs.map(id => 
  fetcher.GetPaintingObject(id)
)
const results = await Promise.all(promises);
console.log(results);

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
        {/*{cardData.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}*/}
      </div>
    </>
  )
}

export default App
