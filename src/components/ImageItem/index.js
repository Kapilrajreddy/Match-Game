import './index.css'

function ImageItem(props) {
  const {eachImage, onClickImage} = props
  const {thumbnailUrl, id} = eachImage

  const imageItemClick = () => {
    onClickImage(id)
  }

  return (
    <li>
      <button
        type="button"
        className="image-item-button"
        onClick={imageItemClick}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="image-item-image" />
      </button>
    </li>
  )
}
export default ImageItem
