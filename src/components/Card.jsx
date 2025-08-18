import '../styles/Card.css'

function Card({ cardData, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={cardData.image} alt={cardData.name} />
            <p>{cardData.name}</p>
        </div>
    )
}

export default Card;