import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 5),
    overflow: "scroll"
  },
  rightMargin: {
    margin: "30%"
  }
}));

const styles = {
  bottomBorder: {
    borderBottom: "1px solid rgba(0,0,0,0.4)",
    margin: "1%"
  },
  openSans: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "300"
  },
  lemonFont: {
    fontFamily: "LemonYellowSunW00-Regular"
  }
};

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} direction="column" justify="center">
        <Grid container spacing={5} justify="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              DRINKS TESTER
            </Typography>
            <Typography variant="caption" gutterBottom style={styles.openSans}>
              SOMETHING porridge with seasonal fruit.
            </Typography>
            <Typography variant="caption" component="p" style={styles.openSans}>
              $10.00
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
            zeroMinWidth
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Classic
            </Typography>
            <Typography variant="caption" gutterBottom style={styles.openSans}>
              Free range any-style eggs served with housemade toast.
            </Typography>
            <Typography variant="caption" component="p" style={styles.openSans}>
              $10.00
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Bene
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Eggs, spinach, hollandaise, house hash and homemade toast.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Frenchie
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Cinnamon citrus infused french toast, bananas, bacon &#38; maple
              syrup.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Fields
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Creamy coconut mushrooms with whipped /FETA?/,
              <br /> eggs &#38; handmade toast.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              The Big Mix
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Bacon, eggs, sausage, house hash, spinach,
              <br /> mushrooms, beans, tomatoes &#38; handmade toast
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Keep it Clean
            </Typography>
            <Typography
              variant="caption"
              style={styles.openSans}
              style={styles.openSans}
              gutterBottom
            >
              Quinoa, spinach, /MUSHROOMS?/, kale, avocado,
              <br /> coriander &#38; poached egg on handmade toast.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            style={styles.bottomBorder}
            align="center"
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Omelettes
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Quinoa, spinach, /MUSHROOMS?/, kale, avocado, coriander &#38;
              <br />
              poached egg on handmade toast.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={5} xl={5} align="center">
            <Typography
              variant="h5"
              component="h3"
              style={styles.lemonFont}
              gutterBottom
            >
              Crumpettes
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              - Beetroot smoked salmon <br />- Poached pear{" "}
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $10.00
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
