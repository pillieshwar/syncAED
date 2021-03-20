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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    color: "black",
    backgroundColor: "magenta",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Navbar /> */}
        <Paper className={classes.root} className={classes.tabs}>
          <Tabs>
            <Link to="/">
              <Tab label="SyncAED Detection"></Tab>
            </Link>
            <Link to="/anomaly_detection">
              <Tab label="Anomaly Detection" />
            </Link>
            <Link to="/event_detection">
              <Tab label="Event Detection" />
            </Link>
          </Tabs>
        </Paper>

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
  );
}

export default App;
