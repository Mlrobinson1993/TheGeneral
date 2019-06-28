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
  QuicksandFont: {
    fontFamily: "'Quicksand', sans-serif"
  },
  alignLeft: {
    float: "left"
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Summer Days
            </Typography>
            <Typography variant="caption" gutterBottom style={styles.openSans}>
              Salt baked beetroot, cashew cheese, charred kale, quinoa, beetroot
              salad, garlic, date, walnuts &#38; activated seeds. (add soft egg
              $3)
            </Typography>
            <Typography variant="caption" component="p" style={styles.openSans}>
              18
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Millie and Emma
            </Typography>
            <Typography variant="caption" gutterBottom style={styles.openSans}>
              Beef burger, cheese, onion jam, Mcclures pickle, aleppo pepper
              mayo, french fries.
            </Typography>
            <Typography variant="caption" component="p" style={styles.openSans}>
              20
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Pure Gains
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              250g Flat iron beef steak, café de paris, caesar garnish, real
              chips.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              25
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Catch
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Market fish, grains, eggplant kasundi, roots, leaves, avocado.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              26
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Pesce
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Citrus cured salmon, spinach, beetroot, soft egg, whipped feta,
              sour dough.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              18
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Cilbir Turkish Eggs
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              House yoghurt, poached eggs, aleppo pepper butter, fried zucchini
              crisps, sour dough.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              17.5
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Because...
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Sourdough, manuka smoked bacon, poached eggs, hollandaise, house
              relish.
              <br />
              Bacon may be switched out for salmon.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              18
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Congee
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Braised ancient grains, butternut puree, mushrooms, spinach,
              poached eggs, almond crumb. <br />+ Pulled pork: $5
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              17
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            align="center"
            style={{
              ...styles.bottomBorder,
              borderLeft: "1px solid rgba(0,0,0,0.4)",
              borderRight: "1px solid rgba(0,0,0,0.4)"
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.QuicksandFont}
              gutterBottom
            >
              Sides
            </Typography>

            <Grid container>
              <Grid item xs="8">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  French Fries &#38; House Mayo
                </Typography>
              </Grid>
              <Grid item xs="4">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  7
                </Typography>
              </Grid>

              <Grid item xs="8">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  Zucchini Fries &#38; Aleppo Pepper Yoghurt
                </Typography>
              </Grid>
              <Grid item xs="4">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  7
                </Typography>
              </Grid>

              <Grid item xs="8">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  Leaf Salad &#38; Lemon Dressing
                </Typography>
              </Grid>
              <Grid item xs="4">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  7
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              component="h3"
              style={{ ...styles.QuicksandFont, marginTop: "3vmin" }}
              gutterBottom
            >
              Something Sweet?
            </Typography>

            <Grid container>
              <Grid item xs="8">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  Duck Island ice-cream cookie sandwich
                </Typography>
              </Grid>
              <Grid item xs="4">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  7.5
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
