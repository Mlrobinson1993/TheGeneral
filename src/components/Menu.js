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
    textAlign: "left"
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
              Loom Bowl
            </Typography>
            <Typography variant="caption" gutterBottom style={styles.openSans}>
              Seasonal fruit salad, quinoa, vanilla marscapone, almonds, cocoa
              nib.
            </Typography>
            <Typography variant="caption" component="p" style={styles.openSans}>
              $12.00
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
              Macao Bowl
            </Typography>
            <Typography variant="caption" gutterBottom style={styles.openSans}>
              House Granola, Nuts &#38; Seeds, coconut panna cotta, medjool
              dates.
            </Typography>
            <Typography variant="caption" component="p" style={styles.openSans}>
              $12
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
              Homely at Best
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              House crumpet, lemon-pistachio-honeycomb butter, blueberry, kaffer
              lime jam.
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Brulee
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Half ruby grapefruit, coconut sugar.
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              pesce
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Citrus cured salmon, spinach, beetroot, soft egg, whipped feta,
              sour dough.
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
              style={styles.QuicksandFont}
              gutterBottom
            >
              Wholefoods
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Cashew cheese, broccoli, kale, nutter toast, beetroot puree &#38;
              rocket. <br />+ soft egg: $3
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
            align="center"
            style={styles.bottomBorder}
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.QuicksandFont}
              gutterBottom
            >
              Because
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Sourdough, manuka smoked bacon, poached eggs, hollandaise, house
              relish.
              <br />
              Bacon may be switched out for salmon.
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
            align="center"
            style={styles.bottomBorder}
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.QuicksandFont}
              gutterBottom
            >
              Loaded
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              Bacon, sausage, vine tomato, mushrooms, kumara, fried eggs,
              toasted sour dough.
            </Typography>
            <Typography variant="caption" style={styles.openSans} component="p">
              $20.00
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
            style={styles.bottomBorder}
          >
            <Typography
              variant="h5"
              component="h3"
              style={styles.QuicksandFont}
              gutterBottom
            >
              Your Eggs on Sourdough
            </Typography>
            <Typography variant="caption" style={styles.openSans} gutterBottom>
              This item needs a description for design purposes
            </Typography>

            <Typography variant="caption" style={styles.openSans} component="p">
              $10.50
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
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  Smoked Bacon
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  6
                </Typography>
              </Grid>

              <Grid item xs="6">
                <Typography
                  variant="caption"
                  style={{ ...styles.QuicksandFont, ...styles.alignLeft }}
                >
                  Sausage
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  6
                </Typography>
              </Grid>

              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  Thyme Mushrooms
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  5
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography
                  variant="caption"
                  style={{ ...styles.QuicksandFont, ...styles.alignLeft }}
                >
                  Vine Roasted Tomatoes
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  5
                </Typography>
              </Grid>

              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  Lemon Seasoned Halloumi
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  6
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  SOMETHING Cubed Salmon
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  7
                </Typography>
              </Grid>

              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  SOMETHING Butter Toast
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography variant="caption" style={styles.QuicksandFont}>
                  4
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
