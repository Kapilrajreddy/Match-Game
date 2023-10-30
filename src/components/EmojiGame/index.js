import {Component} from 'react'
import './index.css'

import Navbar from '../Navbar'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import WinOrLooseCard from '../WinOrLooseCard'

class EmojiGame extends Component {
  state = {
    isGameStarted: true,
    time: 60,
    activeTabId: '',
    image: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    imageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    score: 0,
  }

  componentDidMount() {
    const {tabsList} = this.props

    if (tabsList.length > 0) {
      this.setState({activeTabId: tabsList[0].tabId})
    }
    this.timerId = setInterval(this.setTime, 1000)
  }

  setTime = () => {
    const {time} = this.state
    if (time > 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameStarted: false})
    }
  }

  onClickTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  shuffleImage = () => {
    const {imagesList} = this.props
    const number = Math.floor(Math.random() * imagesList.length)
    const imageItem = imagesList[number].imageUrl
    const imageID = imagesList[number].id
    this.setState({image: imageItem, imageId: imageID})
  }

  onClickImage = id => {
    const {imageId} = this.state
    if (imageId === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.shuffleImage()
    } else {
      clearInterval(this.timerId)
      this.setState({isGameStarted: false})
    }
  }

  onClickPlay = () => {
    const {tabsList} = this.props
    this.setState({
      isGameStarted: true,
      time: 60,
      activeTabId: tabsList[0].tabId,
      image:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      imageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      score: 0,
    })
    this.componentDidMount()
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activeTabId, isGameStarted, time, image, score} = this.state

    return (
      <div className="emoji-game-main-container">
        <Navbar time={time} score={score} />

        {isGameStarted ? (
          <div className="emoji-game-display-container">
            <img
              src={image}
              alt="match"
              className="emoji-game-random-image-display"
            />
            <ul className="tab-item-main-container">
              {tabsList.map(eachTab => (
                <TabItem
                  eachTab={eachTab}
                  key={eachTab.tabId}
                  onClickTab={this.onClickTab}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
            <ul className="image-item-main-container">
              {imagesList.map(eachImage => {
                if (eachImage.category === activeTabId) {
                  return (
                    <ImageItem
                      eachImage={eachImage}
                      key={eachImage.id}
                      onClickImage={this.onClickImage}
                    />
                  )
                }
                return null
              })}
            </ul>
          </div>
        ) : (
          <WinOrLooseCard score={score} onClickPlay={this.onClickPlay} />
        )}
      </div>
    )
  }
}
export default EmojiGame
