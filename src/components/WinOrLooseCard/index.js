import './index.css'

function WinOrLooseCard(props) {
  const {score, onClickPlay} = props

  const playAgainGame = () => {
    onClickPlay()
  }

  return (
    <div className="win-or-loose-card-main-container">
      <div className="win-or-loose-card-score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p className="your-score-text">YOUR SCORE</p>
        <p className="your-score-count">{score}</p>
        <button
          type="button"
          className="play-again-button-container"
          onClick={playAgainGame}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="play-again-text">Play Again</p>
        </button>
      </div>
    </div>
  )
}
export default WinOrLooseCard
