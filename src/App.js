import "./App.css";
import Home from "./components/home";
import { withStyles } from "@material-ui/core/styles";
import AnomalyDetection from "./components/anomalyDetection";
import EventDetection from "./components/eventDetection";
import EventClassification from "./components/eventClassification";
import EventRootCauseAnalysis from "./components/eventRootCauseAnalysis";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import Grid from "@material-ui/core/Grid";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    color: "white",
    backgroundColor: "white",
  },
  margin: {
    margin: theme.spacing(1),
    align: "right",
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ paddingBottom: 0 }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ paddingBottom: 0 }} p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // Start dialog box
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleSnackClick();
  };
  // End dialog box

  //Start Snackbar

  const [sopen, ssetOpen] = React.useState(false);

  const handleSnackClick = () => {
    ssetOpen(true);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    ssetOpen(false);
  };

  //End SnackBar
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Grid
          container
          justify="space-between"
          spacing={24}
          className="highlight-color"
        >
          <Paper elevation={0} className={classes.paper}>
            {/* <Header /> */}
            <h1
              style={{
                padding: "8px",
                paddingLeft: "20px",
                color: "black",
              }}
              className="highlight-color"
            >
              <LanguageOutlinedIcon
                style={{
                  marginBottom: "-7px",
                  color: "red",
                  fontSize: 35,
                  paddingRight: "5px",
                }}
              />
              SyncAEDC
            </h1>
          </Paper>
          <Grid style={{ marginRight: "auto" }}>
            {/* <Navbar /> */}
            <Tabs value={value} onChange={handleChange}>
              <Tab
                indicatorColor="primary"
                style={{ color: "black" }}
                label="Overview"
                {...a11yProps(0)}
              />
              <Tab
                style={{ color: "black" }}
                label="Anomaly Detection"
                {...a11yProps(1)}
              />
              <Tab
                style={{ color: "black" }}
                label="Event Detection & PMU Localization"
                {...a11yProps(2)}
              />
              <Tab
                style={{ color: "black" }}
                label="Event Classification"
                {...a11yProps(3)}
              />
              <Tab
                style={{ color: "black" }}
                label="Event Root Cause Analysis"
                {...a11yProps(4)}
              />
            </Tabs>
          </Grid>
          <Grid>
            <div className={classes.margin}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
              >
                User Settings
              </Button>

              <div>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    {"USER SETTINGS"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Modify the user settings by selecting the appropriate
                      options to reflect the same in UI.
                    </DialogContentText>
                    <Grid container>
                      <FormGroup row>
                        <Grid item xs={4}>
                          <h3 style={{ marginTop: "2.5%" }}>Task : </h3>
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            control={
                              <GreenCheckbox
                                checked={state.checkedA}
                                onChange={handleCheckChange}
                                name="checkedA"
                              />
                            }
                            label="Anomoly Detection"
                            style={{marginLeft: "-3px"}}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            control={
                              <GreenCheckbox
                                checked={state.checkedB}
                                onChange={handleCheckChange}
                                name="checkedB"
                                color="primary"
                              />
                            }
                            label="Event Detection"
                            style={{marginLeft: "22px"}}
                          />
                        </Grid>
                      </FormGroup>
                    </Grid>

                    <Grid container>
                      <FormGroup row>
                        <Grid item xs={4}>
                          <h3 style={{ marginTop: "3%" }}>Base Detector : </h3>
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                icon={
                                  <CheckBoxOutlineBlankIcon fontSize="small" />
                                }
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                name="checkedI"
                              />
                            }
                            label="DBScan"
                            style={{marginLeft: "-3px"}}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            control={
                              <GreenCheckbox
                                checked={state.checkedG}
                                onChange={handleCheckChange}
                                name="checkedG"
                              />
                            }
                            label="Linear Regression"
                            style={{marginLeft: "22px"}}
                          />
                        </Grid>
                      </FormGroup>
                    </Grid>
                    <Grid container>
                      <FormGroup row>
                        <Grid item xs={3}>
                          <h3 style={{ marginTop: "3%" }}>
                            PMU Data Anomoly Option
                          </h3>
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                icon={
                                  <CheckBoxOutlineBlankIcon fontSize="small" />
                                }
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                name="checkedI"
                              />
                            }
                            label="Detect & Flag"
                            style={{marginLeft: "5px"}}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <FormControlLabel
                            control={
                              <GreenCheckbox
                                checked={state.checkedG}
                                onChange={handleCheckChange}
                                name="checkedG"
                              />
                            }
                            label="Mitigate & Replace"
                            style={{marginLeft: "-4px"}}
                          />
                        </Grid>
                      </FormGroup>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                      Save
                    </Button>
                    <Snackbar
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      sopen={sopen}
                      autoHideDuration={6000}
                      onClose={handleSnackClose}
                      message="Note archived"
                      action={
                        <React.Fragment>
                          <Button
                            color="secondary"
                            size="small"
                            onClick={handleSnackClose}
                          >
                            UNDO
                          </Button>
                          <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleSnackClose}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </React.Fragment>
                      }
                    />
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </Grid>
          <TabPanel
            style={{ marginTop: "-12px", paddingBottom: 0 }}
            value={value}
            index={0}
          >
            <Home />
          </TabPanel>
          <TabPanel
            style={{ marginTop: "-20px", paddingBottom: 0 }}
            value={value}
            index={1}
          >
            <AnomalyDetection />
          </TabPanel>
          <TabPanel
            style={{ marginTop: "-12px", paddingBottom: 0 }}
            value={value}
            index={2}
          >
            <EventDetection />
          </TabPanel>
          <TabPanel
            style={{ marginTop: "-12px", paddingBottom: 0 }}
            value={value}
            index={3}
          >
            <EventClassification />
          </TabPanel>
          <TabPanel
            style={{ marginTop: "-12px", paddingBottom: 0 }}
            value={value}
            index={4}
          >
            <EventRootCauseAnalysis />
          </TabPanel>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
