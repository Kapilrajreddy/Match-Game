import './index.css'

function Navbar(props) {
  const {time, score} = props
  return (
    <ul className="navbar-main-container">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
      <div className="navbar-score-and-time-container">
        <li className="navbar-score-container">
          <p className="navbar-score-name">Score:</p>
          <p className="navbar-score-count">{score}</p>
        </li>
        <li className="navbar-timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="navbar-timer-icon-image"
          />
          <p className="navbar-timer-count">{time} sec</p>
        </li>
      </div>
    </ul>
  )
}
export default Navbar
