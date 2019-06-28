import Salad from "../img/salad.jpg";
import cafeFood from "../img/cafe-food.jpg";
import Latte from "../img/latte.jpg";
import Food from "../img/food.jpeg";
import React, { Component } from "react";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import MdCall from "react-ionicons/lib/MdCall";
import MdMail from "react-ionicons/lib/MdMail";
import Radium from "radium";

import {
  Grid,
  Container,
  Typography,
  Card,
  withStyles,
  Avatar
} from "@material-ui/core";

const styles = {
  root: {
    boxShadow: "none",
    borderRadius: "0"
  },

  image: {
    height: "300px",
    width: "300px",
    objectFit: "cover",
    filter: "grayscale(60%)"
  },

  imageHovered: {
    height: "300px",
    width: "300px",
    objectFit: "cover"
  },

  card: {
    height: "300px",
    width: "300px",
    margin: "0",
    backgroundColor: "hsl(0, 0%, 97%)",
    boxShadow: "0",
    padding: "40px"
  },
  boldText: {
    fontWeight: "500",
    fontSize: "24px",
    fontFamily: "quicksand"
  },
  avatar: {
    margin: "10px",
    backgroundColor: "rgba(0,0,0,1)"
  },
  openSans: {
    fontFamily: "'Open Sans', sans-serif"
  }
};
class ImageGrid extends Component {
  state = {
    hovered: false
  };

  applyGrayscale = () => {
    this.setState({
      hovered: true
    });
  };

  removeGrayscale = () => {
    this.setState({
      hovered: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="lg" justify="center" align="center">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <Card style={styles.card} className={classes.root}>
                <Typography
                  variant="overline"
                  component="h5"
                  align="center"
                  style={styles.boldText}
                  gutterBottom
                >
                  Address
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h6"
                  style={styles.openSans}
                >
                  Pacific Ave
                  <br /> Mount Maunganui, Tauranga
                  <br /> 3116
                </Typography>
              </Card>
            </Grid>

            <Grid
              item
              onMouseEnter={this.applyGrayscale}
              onMouseLeave={this.removeGrayscale}
              xs={12}
              sm={12}
              md={4}
              lg={3}
              xl={3}
            >
              <img
                src={Salad}
                alt="Mixture-Cafe-Salad"
                style={this.state.hovered ? styles.imageHovered : styles.image}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <Card style={styles.card} className={classes.root}>
                <Typography
                  variant="overline"
                  component="h5"
                  align="center"
                  style={styles.boldText}
                >
                  Opening Times
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ fontFamily: "quicksand" }}
                >
                  Weekdays
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  style={styles.openSans}
                  gutterBottom
                >
                  07:30 - 15:30
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ fontFamily: "quicksand" }}
                >
                  Weekends
                </Typography>
                <Typography
                  variant="body1"
                  style={styles.openSans}
                  component="p"
                >
                  07:30 - 15:30
                </Typography>
              </Card>
            </Grid>

            <Grid
              item
              onMouseEnter={this.applyGrayscale}
              onMouseLeave={this.removeGrayscale}
              xs={12}
              sm={12}
              md={4}
              lg={3}
              xl={3}
            >
              <img
                src={Latte}
                alt="Mixture-Cafe-Latte"
                style={this.state.hovered ? styles.imageHovered : styles.image}
              />
            </Grid>
            <Grid
              item
              onMouseEnter={this.applyGrayscale}
              onMouseLeave={this.removeGrayscale}
              xs={12}
              sm={12}
              md={4}
              lg={3}
              xl={3}
            >
              <img
                src={Food}
                alt="General-cafe-food"
                style={this.state.hovered ? styles.imageHovered : styles.image}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <Card style={styles.card} className={classes.root}>
                <Typography
                  variant="overline"
                  component="h5"
                  align="center"
                  style={styles.boldText}
                >
                  Social
                </Typography>
                <a href="https://www.facebook.com/The-General-1939488229604591/?ref=br_rs">
                  <Avatar style={styles.avatar}>
                    <LogoFacebook fontSize="30px" color="#ffffff" />
                  </Avatar>
                </a>

                <a href="https://www.instagram.com/thegeneralmtmaunganui/">
                  <Avatar style={styles.avatar}>
                    <LogoInstagram fontSize="30px" color="#ffffff" />
                  </Avatar>
                </a>
              </Card>
            </Grid>

            <Grid
              item
              onMouseEnter={this.applyGrayscale}
              onMouseLeave={this.removeGrayscale}
              xs={12}
              sm={12}
              md={4}
              lg={3}
              xl={3}
            >
              <img
                src={cafeFood}
                alt="Mixture-Cafe-Food"
                style={this.state.hovered ? styles.imageHovered : styles.image}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <Card style={styles.card} className={classes.root}>
                <Typography
                  variant="overline"
                  component="h5"
                  align="center"
                  style={{ ...styles.boldText, marginBottom: "-10px" }}
                >
                  Contact
                </Typography>

                <Avatar style={styles.avatar}>
                  <MdCall fontSize="30px" color="#ffffff" />
                </Avatar>
                <Typography
                  variant="body1"
                  component="p"
                  style={styles.openSans}
                >
                  07-574-7061
                </Typography>

                <Avatar style={styles.avatar}>
                  <MdMail fontSize="30px" color="#ffffff" />
                </Avatar>
                <Typography
                  variant="body1"
                  component="p"
                  style={styles.openSans}
                >
                  hello@thegeneral.co.nz
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Radium(ImageGrid));
