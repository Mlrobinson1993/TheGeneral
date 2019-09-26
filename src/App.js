import React, { Component } from "react";
import "./App.css";

import Avatar from "@material-ui/core/Avatar";

import {
  Typography,
  Container,
  CssBaseline,
  Grid,
  withStyles
} from "@material-ui/core";

import ImageGrid from "./components/ImageGrid";

import Fade from "react-reveal/Fade";

// Images
import bgImage from "./img/general-floor.jpg";
import mixtureLogo from "./img/the-general.png";
import coffeeImage from "./img/coffee.jpg";

//components
import Menu from "./components/Menu";
import MenuLunch from "./components/MenuLunch";
import MenuDrinks from "./components/MenuDrinks";
import Navbar from "./components/Navbar";
import MenuNavigator from "./components/menuNavigator";

const styles = {
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(60%)"
    // transform: "scale(1.5)"
  },

  logo: {
    margin: "0 auto",
    height: "50%",
    width: "50%",
    position: "absolute",
    objectFit: "contain",
    zIndex: "99",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
    // filter: "invert(100%)"
  },

  avatar: {
    maxWidth: "325px",
    minWidth: "200px",
    minHeight: "200px",
    maxHeight: "325px",
    width: "auto",
    height: "auto",
    display: "inline-block",
    margin: "30px",
    boxShadow: "0 2px 3px 0 hsla(0, 0%, 0%, 0.2)"
  }
};

// let currentImage;

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Navbar />
        <section id="home" style={{ minHeight: "100vh" }}>
          <Container
            maxWidth="xl"
            style={{
              height: "100vh",
              padding: "0"
            }}
          >
            <img src={mixtureLogo} alt="Mixture-logo" style={styles.logo} />

            <img
              src={bgImage}
              style={styles.image}
              alt="Mixture-eatery-entrance"
            />
          </Container>
        </section>

        <Fade>
          <section id="about" style={{ minHeight: "80vh" }}>
            <Container
              maxWidth="xl"
              style={{
                background: "white",
                height: "auto",
                borderRadius: "5px",
                padding: "5% 15%",
                marginTop: "5rem"
              }}
            >
              <Grid container alignItems="center">
                <Grid item sm>
                  <Avatar
                    alt="coffee"
                    src={coffeeImage}
                    style={{ ...styles.avatar, filter: "grayscale(50%)" }}
                    align="center"
                    justify="center"
                  />
                </Grid>
                <Grid item sm>
                  <Typography
                    variant="h3"
                    component="h3"
                    gutterBottom
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      textAlign: "center"
                    }}
                  >
                    ABOUT US
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: "300"
                    }}
                  >
                   We pride ourselves on a seasonal, locally sourced, innovative menu. Whether you're on a health kick or a carb binge, we have it all covered.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </section>
        </Fade>
        <Fade>
          <section id="menu" style={{ minHeight: "100vh" }}>
            <Typography
              variant="h2"
              component="h2"
              style={{
                textAlign: "center",
                padding: "2rem",
                fontFamily: "'Quicksand', sans-serif"
              }}
            >
              Menus
            </Typography>

            <MenuNavigator />
          </section>
        </Fade>

        <Fade>
          <section id="contact" style={{ minHeight: "100vh" }}>
            <Container
              maxWidth="xl"
              style={{
                minHeight: "120vh"
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  fontFamily: "'Quicksand', sans-serif"
                }}
                gutterBottom
              >
                Find Us
              </Typography>

              <ImageGrid />
            </Container>
          </section>
        </Fade>
      </div>
    );
  }
}

export default App;
