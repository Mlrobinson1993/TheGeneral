import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import { ElevationScroll } from "../utils/ElevationScroll";

const styles = {
  root: {
    flexGrow: 1,
    background: "transparent"
  },
  marginCenter: {
    margin: "0 auto"
  }
};

function Header() {
  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed" color="cyan">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              style={styles.marginCenter}
            >
              Mixture
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default withStyles(styles)(Header);
