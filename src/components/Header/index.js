import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="container d-flex flex-row justify-content-between">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburg-button"
          testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="nav-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="d-flex flex-row justify-content-end container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
          <ul type="none" className="modal">
            <Link
              to="/"
              className="text-decoration-none"
              onClick={() => close()}
            >
              <li className="d-flex mb-3">
                <AiFillHome className="home-icon" />
                <h3 className="text-dark">Home</h3>
              </li>
            </Link>
            <Link
              to="/about"
              className="text-decoration-none"
              onClick={() => close()}
            >
              <li className="d-flex mb-3">
                <BsInfoCircleFill className="home-icon" />
                <h3 className="text-dark">About</h3>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)
export default withRouter(Header)
