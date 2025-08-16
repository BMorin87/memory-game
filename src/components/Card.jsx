function Card({ cardData }) {
    return (
        <div className="card">
            <img src={cardData.image} alt={cardData.name} />
            <p>{cardData.name}</p>
        </div>
    )
}

export default Card;