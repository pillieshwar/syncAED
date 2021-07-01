import React, { Component } from "react";
import axios from "axios";
import eventData from "../data/eventData";
import Grid from "@material-ui/core/Grid";
import Maps from "./maps";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Paper from "@material-ui/core/Paper";
import chart_back from "../App.css";
import { ButtonGroup, Button, Fab, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { StayPrimaryLandscape } from "@material-ui/icons";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { createMuiTheme, colors } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";

let API_URL = "http://127.0.0.1:9002/main_result_events/0";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      subsetdata: [],
      chart_data: [],
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadCharts = this.loadCharts.bind(this);
  }

  loadCharts(id) {
    console.log(id);
    let API_CHART_URL = "http://127.0.0.1:9002/result_events/chart_data/" + id;
    const data = axios.get(API_CHART_URL);
    data.then((res) => this.setState({ chart_data: res.data || [] }));
  }

  nextPage() {
    console.log("next " + this.state.page);
    API_URL =
      "http://127.0.0.1:9002/main_result_events/" + (this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
    this.getData();
  }

  handleChange() {
    console.log(this.state.page);
  }

  getData() {
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ posts: res.data || [] }));
  }

  prevPage() {
    console.log("prev " + this.state.page);
    if (this.state.page >= 0) {
      API_URL =
        "http://127.0.0.1:9002/main_result_events/" + (this.state.page - 1);
    }
    if (this.state.page > 0) {
      this.setState({ page: this.state.page - 1 });
    }
    this.getData();
  }

  componentDidMount() {
    console.log("componentDidMount");
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ posts: res.data || [] }));
    this.loadCharts(1);
  }
  render() {
    const styleObj = {
      marginBottom: "-15px",
    };

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 11,
      },
      body: {
        fontSize: 7,
      },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    return (
      <div class="row">
        <Grid style={styleObj} container>
          <Grid item xs={6}>
            <Maps />
          </Grid>
          <Grid style={{ marginLeft: "-12px" }} item xs={6}>
            <Grid style={{ marginLeft: "10px" }} item xs={12}>
              <Paper style={{ width: "105%" }} elevation={2}>
                <TableContainer>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>WINDOW TIME</StyledTableCell>
                        <StyledTableCell>PMU ID</StyledTableCell>
                        <StyledTableCell>BUS ID</StyledTableCell>
                        <StyledTableCell align="center">
                          ANOMALY DETECTED
                        </StyledTableCell>
                        <StyledTableCell>CONFIDENTIAL LEVEL</StyledTableCell>
                        <StyledTableCell>DETECTOR</StyledTableCell>
                      </TableRow>
                    </TableHead>

                    <tbody>
                      {this.state.posts.length > 0 ? (
                        this.state.posts.map((anomaly) => (
                          <tr id={anomaly.id}>
                            <td>
                              <div>
                                <p style={{ margin: "0" }}>
                                  {anomaly.event_date}
                                </p>
                                <p style={{ margin: "0" }}>
                                  {anomaly.event_time}
                                </p>
                              </div>
                            </td>
                            <td>{anomaly.pmu_id}</td>
                            <td>{anomaly.bus_id}</td>

                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  fontSize: "0.2rem",
                                }}
                              >
                                <ButtonGroup
                                  size="small"
                                  grouped="minWidth:28"
                                  color="primary"
                                  aria-label="outlined primary button group"
                                >
                                  <Button>Va</Button>
                                  <Button>Vm</Button>
                                  <Button>Ca</Button>
                                  <Button >Cm</Button>
                                  <Button>F</Button>
                                  <Button >Ro</Button>
                                  {/* color="secondary" */}
                                </ButtonGroup>
                              </div>
                            </td>

                            <td>32.37111871</td>
                            <td>1</td>
                            {/* <td>
                            <IconButton
                              color="secondary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <VisibilityIcon
                                id={anomaly.id}
                                onClick={() => this.loadCharts(anomaly.id)}
                              />
                            </IconButton>
                          </td> */}
                          </tr>
                        ))
                      ) : (
                        <td>Loading...</td>
                      )}
                    </tbody>
                    <div
                      style={{
                        float: "right",
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px",
                      }}
                    >
                      <IconButton
                        color="primary"
                        variant="contained"
                        onClick={this.prevPage}
                        aria-label="Back"
                        style={{ padding: "5px" }}
                      >
                        <ArrowBackIosRoundedIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        variant="contained"
                        backgroundColor="primary"
                        onClick={this.nextPage}
                        aria-label="Next"
                        style={{ padding: "5px" }}
                      >
                        <ArrowForwardIosRoundedIcon />
                      </IconButton>
                    </div>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid style={{ marginLeft: "10px", marginTop: "8px" }} item xs={12}>
              <Paper elevation={3}>
                {/* <table style={{ minWidth: 650 }} className="dataTable">
                  <thead>
                    <tr>
                      <th>WINDOW TIME</th>
                      <th>PMU ID</th>
                      <th>EVENT TYPE</th>
                      <th>EVENT DETECTION</th>
                      <th>CONFIDENTIAL LEVEL</th>
                      <th>BAD DATA FLAG</th>
                      <th>SEVERITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.posts.length > 0 ? (
                      this.state.posts.map((anomaly) => (
                        <tr id={anomaly.id}>
                          <td>
                            <div>
                              <p style={{ margin: "0" }}>
                                {anomaly.event_date}
                              </p>
                              <p style={{ margin: "0" }}>
                                {anomaly.event_time}
                              </p>
                            </div>
                          </td>
                          <td>{anomaly.pmu_id}</td>
                          <td>{anomaly.bus_id}</td>

                          <td>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                fontSize: "0.2rem",
                              }}
                            >
                              <ButtonGroup
                                size="small"
                                grouped="minWidth:28"
                                color="primary"
                                aria-label="outlined primary button group"
                              >
                                <Button color="secondary">Va</Button>
                                <Button color="secondary">Vm</Button>
                                <Button>Ca</Button>
                                <Button color="secondary">Cm</Button>
                                <Button>F</Button>
                                <Button color="secondary">Ro</Button>
                              </ButtonGroup>
                            </div>
                          </td>

                          <td>32.37111871</td>
                          <td>1</td>
                        </tr>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tbody>
                  <div
                    style={{
                      float: "right",
                      display: "flex",
                      flexDirection: "row",
                      padding: "5px",
                    }}
                  >
                    <IconButton
                      color="primary"
                      variant="contained"
                      onClick={this.prevPage}
                      aria-label="Back"
                      style={{ padding: "5px" }}
                    >
                      <ArrowBackIosRoundedIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      variant="contained"
                      backgroundColor="primary"
                      onClick={this.nextPage}
                      aria-label="Next"
                      style={{ padding: "5px" }}
                    >
                      <ArrowForwardIosRoundedIcon size="small" />
                    </IconButton>
                  </div>
                </table> */}
                <TableContainer>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>WINDOW TIME</StyledTableCell>
                        <StyledTableCell>PMU ID</StyledTableCell>
                        <StyledTableCell>EVENT TYPE</StyledTableCell>
                        <StyledTableCell>BUS ID</StyledTableCell>
                        <StyledTableCell>CONFIDENTIAL LEVEL</StyledTableCell>
                        <StyledTableCell>BAD DATA FLAG</StyledTableCell>
                        <StyledTableCell>SEVERITY</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <tbody>
                      {eventData.map((eventData) => (
                        <tr>
                          <td>
                            <div>
                              <p style={{ margin: "0", fontSize: "0.7rem" }}>
                                {eventData.windowTime.date}
                              </p>
                              <p style={{ margin: "0", fontSize: "0.7rem" }}>
                                {eventData.windowTime.startTime}
                              </p>
                            </div>
                          </td>
                          <td>{eventData.pmu_id}</td>
                          <td>{eventData.event_type}</td>
                          <td>{eventData.bus_id}</td>
                          <td>{eventData.confidence_level}</td>
                          <td>{eventData.bad_flag_data}</td>
                          <td>{eventData.severity}</td>
                          {/* <td>
                          <button className="showButton">SHOW</button>
                        </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
