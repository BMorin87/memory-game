import { useState } from 'react'
import '../styles/App.css'
import Scoreboard from './Scoreboard'
import Card from './Card'
import DataFetcher from './DataFetcher'

const fetcher = new DataFetcher();

const cardData = await (async () => {
  const fetchedData = await fetcher.GetEuropeanDogIDs();
  const promises = fetchedData.objectIDs.map(id => fetcher.GetPaintingObject(id));
  const results = await Promise.all(promises);
  const cardData = results.filter(painting => painting.primaryImage).map((painting, index) => {
    // Remove any additional names in parentheses.
    const cleanedArtistName = painting.artistDisplayName.replace(/\s*\(.*\)/, '').trim();
    return {
      image: painting.primaryImage,
      id: index,
      name: cleanedArtistName
    }
  });
  return cardData;
})();

function getShuffledCards(cards) {
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [displayedCards, setDisplayedCards] = useState(() => getShuffledCards(cardData));

  const handleCardClick = () => {
    const newShuffledCards = getShuffledCards(cardData);
    setDisplayedCards(newShuffledCards);
  } 

  return (
    <>
      <div className="header">
        <h1>Memory Game</h1>
        <p>Get points by clicking a painting but don't click any more than once!</p>
        <Scoreboard score={score} bestScore={bestScore} />
      </div>
      <div className="card-container">
        {displayedCards.map((cardData) => (
          <Card key={cardData.id} cardData={cardData} onClick={handleCardClick} />
        ))}
      </div>
    </>
  )
}

export default App
