import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import AnomalyDetection from "./components/anomalyDetection";
import EventDetection from "./components/eventDetection";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import Grid from "@material-ui/core/Grid";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    color: "white",
    backgroundColor: "white",
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

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Grid container className="highlight-color">
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

          {/* <Navbar /> */}
          <Tabs value={value} onChange={handleChange}>
            <Tab
              indicatorColor="primary"
              style={{ color: "black" }}
              label="SyncAED Detection"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "black" }}
              label="Anomaly Detection"
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: "black" }}
              label="Event Detection"
              {...a11yProps(2)}
            />
          </Tabs>
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
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
