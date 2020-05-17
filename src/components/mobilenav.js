import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import MediaQuery from "react-responsive"

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    top: "0px",

  },
  bmBurgerBars: {
    background: "#000",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "30px",
    width: "30px",
  },
  bmCross: {
    background: "#000",
    height: "30px",
    marginLeft: "-20px"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#fff",
    padding: "2.5em 1.5em 0 0.7em",
    fontSize: "1.15em",
    lineHeight: 2,
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#000",
    padding: "0.1em",
  },
  bmItem: {
    display: "block",
    textDecoration: "none"
  },
}

class Mobilenav extends React.Component {

  showSettings(event) {
    event.preventDefault()
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={styles}>
      <Link id="about" className="menu-item" to="/">
        Home
      </Link>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/casestudy">
          Play Study
        </Link>
        <Link  className="menu-item"  to="/programs">
          Program
        </Link>
        <Link  className="menu-item"  to="/contact">
          Contact Us
        </Link>
        <Link  className="menu-item"  to="">
          Login
        </Link>
        <Link  className="menu-item"  to="">
          Donate
        </Link>
      </Menu>
    )
  }
}

export default Mobilenav
