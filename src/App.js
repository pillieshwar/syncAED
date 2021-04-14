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
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    color: "white",
    backgroundColor: "white",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <Grid container className="highlight-color">
            <Grid item xs={2}>
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
            </Grid>
            <Grid
              style={{
                marginLeft: "0px",
                width: "120%",
                background: "white",
                color: "black",
              }}
              item
              xs={10}
            >
              {/* <Navbar /> */}
              <Tabs>
                <Link to="/">
                  <Tab
                    active
                    style={{ color: "black" }}
                    label="SyncAED Detection"
                  ></Tab>
                </Link>
                <Link to="/anomaly_detection">
                  <Tab style={{ color: "black" }} label="Anomaly Detection" />
                </Link>
                <Link to="/event_detection">
                  <Tab style={{ color: "black" }} label="Event Detection" />
                </Link>
              </Tabs>
            </Grid>
          </Grid>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/anomaly_detection">
              <AnomalyDetection />
            </Route>
            <Route path="/event_detection">
              <EventDetection />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
