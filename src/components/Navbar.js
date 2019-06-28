import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, animateScroll as scroll } from "react-scroll";

import Radium from "radium";

const styles = {
  anchorStyles: {
    textDecoration: "none",
    color: "white",
    fontFamily: "'open sans', sans-serif",
    transition: "0.3s ease-out",
    borderBottom: "2px solid transparent",
    fontSize: "2.5vmin",
    whiteSpace: "nowrap",

    ":hover": {
      borderBottom: "2px solid white"
    }
  },

  anchorStylesScroll: {
    textDecoration: "none",
    color: "white",
    fontFamily: "'open sans', sans-serif",
    transition: "0.3s ease-out",
    borderBottom: "2px solid transparent",
    fontSize: "2.5vmin",
    whiteSpace: "nowrap",

    ":hover": {
      borderBottom: "2px solid white"
    }
  },

  lastChildStyle: {
    textDecoration: "none",
    color: "white",
    transition: "0.3s ease-out",
    fontFamily: "'open sans', sans-serif",
    fontSize: "2.5vmin",
    borderRadius: "5px",
    padding: "5px 10px",
    backgroundColor: "black",
    border: "1px solid white",
    whiteSpace: "nowrap",

    ":hover": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black"
    }
  },

  appBarStyle: {
    background: "rgba(0,0,0,0)",
    alignItems: "flex-end",
    boxShadow: "none",
    transition: "0.3s ease-out",
    borderRadius: "3px"
    // width: "110%"
  },

  appBarScrollStyle: {
    background: "rgba(0,0,0,0.8)",
    alignItems: "flex-end",
    // boxShadow: "none",
    transition: "0.3s ease-out",
    borderRadius: "0px 0px 5px 5px"
  }
};

class SimpleAppBar extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          color="default"
          style={
            this.state.isTop ? styles.appBarStyle : styles.appBarScrollStyle
          }
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              style={{ margin: "0 20px" }}
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                <a
                  href="#home"
                  key="home"
                  style={
                    this.state.isTop
                      ? styles.anchorStyles
                      : styles.anchorStylesScroll
                  }
                >
                  Home
                </a>
              </Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              style={{ margin: "0 20px" }}
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                <a
                  href="#about"
                  key="about"
                  style={
                    this.state.isTop
                      ? styles.anchorStyles
                      : styles.anchorStylesScroll
                  }
                >
                  About us
                </a>
              </Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              style={{ margin: "0 20px" }}
            >
              <Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                <a
                  href="#menu"
                  key="menu"
                  style={
                    this.state.isTop
                      ? styles.anchorStyles
                      : styles.anchorStylesScroll
                  }
                >
                  Menu
                </a>
              </Link>
            </Typography>

            <Typography
              variant="h6"
              color="inherit"
              style={{ margin: "0 20px" }}
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                <a href="#contact" key="contact" style={styles.lastChildStyle}>
                  Find Us
                </a>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Radium(SimpleAppBar);
