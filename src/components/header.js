import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import Logo from "../static/logonew.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    fontStyle: "oblique",
    fontFamily: "system-ui",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Grid container className="highlight-color">
        <Grid item xs={11}>
          <Paper elevation={0} className={classes.paper}>
            {/* <Header /> */}
            <h1
              style={{ padding: "10px", color: "white" }}
              className="highlight-color"
            >
              Synchrophasor Anomaly/Event Detection and Classification
            </h1>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <SettingsIcon
            style={{ marginTop: "1rem" }}
            aria-controls="header"
            color="white"
            fontSize="medium"
            onClick={handleClick}
            aria-label="add"
            aria-haspopup="true"
          />
          <Menu
            id="header"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </div>
    // <div className="myHeader">
    //  <p style={{marginLeft:"0.5rem",marginTop:"1rem",fontWeight:"600", fontSize:"1.3rem"}}>Synchrophasor Anomaly/Event Detection and Classification </p>
    //   <button className="userSettings"
    //     onClick={() => alert("Settings")}
    //   >
    //     User Settings
    //   </button>
    // </div>
  );
}
