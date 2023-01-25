import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SingleItem from './Components/SingleItem'
import './App.css'

class App extends Component {
  state = {
    list: [],
    website: '',
    userName: '',
    password: '',
    passwordShow: false,
    searchValue: '',
  }

  onChangeWebsite = event => {
    const a = event.target.value
    this.setState({website: a})
  }

  onChangeUserName = event => {
    const a = event.target.value
    this.setState({userName: a})
  }

  onChangePassword = event => {
    const a = event.target.value
    this.setState({password: a})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const colorList = [
      'blueImage',
      'greyImage',
      'violetImage',
      'greenImage',
      'orangeImage',
      'redImage',
      'darkGreenImage',
      'yellowImage',
      'darkGrayImage',
      'lightBlueImage',
    ]
    const color = colorList[Math.ceil(Math.random() * 10)]
    const a = {id: uuidv4(), website, userName, password, color}
    this.setState(prevState => ({
      list: [...prevState.list, a],
      website: '',
      userName: '',
      password: '',
    }))
  }

  checkBoxClicked = () => {
    this.setState(prevState => ({
      passwordShow: !prevState.passwordShow,
    }))
  }

  onDeleteButtonClicked = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(eachItem => eachItem.id !== id),
    }))
  }

  onSearchValueEntered = event => {
    const a = event.target.value
    this.setState({searchValue: a})
  }

  onListLoop = () => {
    const {list, searchValue, passwordShow} = this.state
    const newList = list.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchValue.toLowerCase()),
    )
    const a =
      newList.length === 0 ? (
        <li className="passwordOutputContainer_empty">
          <img
            alt="no passwords"
            className="passwordOutputContainer_empty_image"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="passwordOutputContainer_empty_heading">No Passwords</p>
        </li>
      ) : (
        newList.map(eachItem => (
          <SingleItem
            key={eachItem.id}
            eachItem={eachItem}
            onDeleteButtonClicked={this.onDeleteButtonClicked}
            passwordShow={passwordShow}
          />
        ))
      )
    return a
  }

  passwordOutput = () => {
    const {list} = this.state
    const a = list.length
    const output =
      a === 0 ? (
        <li className="passwordOutputContainer_empty">
          <img
            alt="no passwords"
            className="passwordOutputContainer_empty_image"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="passwordOutputContainer_empty_heading">No Passwords</p>
        </li>
      ) : (
        this.onListLoop()
      )
    return output
  }

  render() {
    const {list, website, userName, password, searchValue} = this.state
    const a = list.length
    return (
      <div className="background_container">
        <img
          className="heading_image"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="top_container">
          <img
            className="top_container_image_one"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
          <form
            className="top_container_middle_container"
            onSubmit={this.onClickAdd}
          >
            <h1 className="top_container_middle_container_heading">
              Add New Password
            </h1>
            <div className="website_container">
              <img
                alt="website"
                className="website_image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                placeholder="Enter Website"
                className="website_input"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="website_container">
              <img
                alt="username"
                className="website_image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                placeholder="Enter Username"
                className="website_input"
                onChange={this.onChangeUserName}
                value={userName}
              />
            </div>
            <div className="website_container">
              <img
                alt="password"
                className="website_image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                placeholder="Enter Password"
                className="website_input"
                onChange={this.onChangePassword}
                value={password}
                type="password"
              />
            </div>
            <button
              type="submit"
              className="AddButtonBlue"
              onClick={this.onClickAdd}
            >
              Add
            </button>
          </form>
          <img
            className="top_container_image_two"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="bottom_container">
          <div className="bottom_top_container">
            <div className="bottom_top_container_one">
              <h1 className="bottom_top_container_one_heading">
                Your Passwords
              </h1>
              <p className="bottom_top_container_one_para">{a}</p>
            </div>
            <div className="bottom_top_container_two">
              <img
                className="bottom_top_container_two_image"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                placeholder="Search"
                className="bottom_top_container_two_input"
                type="search"
                onChange={this.onSearchValueEntered}
                value={searchValue}
              />
            </div>
          </div>
          <hr className="bottom__container_line" />
          <div className="bottom_container_second_container_top">
            <input
              id="check"
              className="bottom_container_second_container_top_input"
              type="checkBox"
              onClick={this.checkBoxClicked}
            />
            <label
              htmlFor="check"
              className="bottom_container_second_container_top_heading"
            >
              Show Passwords
            </label>
          </div>
          <ul className="passwordsItemContainers">{this.passwordOutput()}</ul>
        </div>
      </div>
    )
  }
}

export default App
