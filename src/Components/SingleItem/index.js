import './index.css'

const SingleItem = props => {
  const {eachItem, onDeleteButtonClicked, passwordShow} = props
  const {id, website, userName, password, color} = eachItem
  const firstLetterHeading = website[0].toUpperCase()
  const paraOrImage = passwordShow ? (
    <p className="webNamePassContainerPara">{password}</p>
  ) : (
    <img
      alt="stars"
      className="starsImage"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )

  const DeleteButtonClicked = () => {
    onDeleteButtonClicked(id)
  }

  return (
    <li className="singleItemContainer">
      <h1 className={`firstLetter ${color}`}>{firstLetterHeading}</h1>
      <div className="webNamePassContainer">
        <p className="webNamePassContainerPara">{website}</p>
        <p className="webNamePassContainerPara">{userName}</p>
        {paraOrImage}
      </div>
      <button
        className="noUseButton"
        type="button"
        onClick={DeleteButtonClicked}
        id="delete"
      >
        <img
          alt="delete"
          className="deleteImage"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default SingleItem
