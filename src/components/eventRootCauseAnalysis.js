import React, { Component } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import Grid from "@material-ui/core/Grid";
import Maps from "./mapsLocalization";
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
let API_URL = "http://127.0.0.1:9002/result_events_localization/0";
class EventRootCauseAnalysis extends Component {
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
    API_URL = "http://127.0.0.1:9002/result_events/" + (this.state.page + 1);
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
      API_URL = "http://127.0.0.1:9002/result_events/" + (this.state.page - 1);
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

    const renderLineChart = (
      <LineChart width={310} height={160} data={this.state.chart_data}>
        <Line
          type="monotone"
          dataKey="vol_angle"
          stroke="#0072B5"
          activeDot={{ r: 5 }}
          dot={false}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );

    const renderLineChart2 = (
      <LineChart width={310} height={160} data={this.state.chart_data}>
        <Line
          type="monotone"
          dataKey="vol_mag"
          stroke="#FF0000"
          activeDot={{ r: 5 }}
          dot={false}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );

    const renderLineChart3 = (
      <LineChart width={310} height={160} data={this.state.chart_data}>
        <Line
          type="monotone"
          dataKey="current_angle"
          stroke="#1B7340"
          activeDot={{ r: 5 }}
          dot={false}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );

    const renderLineChart4 = (
      <LineChart width={310} height={160} data={this.state.chart_data}>
        <Line
          type="monotone"
          dataKey="current_mag"
          stroke="#F19828"
          activeDot={{ r: 5 }}
          dot={false}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );

    const renderLineChart5 = (
      <LineChart width={310} height={160} data={this.state.chart_data}>
        <Line
          type="monotone"
          dataKey="frequency"
          stroke="#D2386C"
          activeDot={{ r: 5 }}
          dot={false}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );

    const renderLineChart6 = (
      <LineChart width={310} height={160} data={this.state.chart_data}>
        <Line
          type="monotone"
          dataKey="rocof"
          stroke="#926AA6"
          activeDot={{ r: 5 }}
          dot={false}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );

    const styleObj = {
      paddingTop: "7px",
    };
    const styleObjCharts = {
      // paddingTop: "14px",
    };

    const styleObjCharts2 = {
      // marginTop: "-1px",
    };

    const fabStyle = {
      color: colors.green[800],
      minWidth: 16,
      minHeight: 28,
      height: 28,
      width: 16,
    };
    return (
      <div class="row">
        <Grid style={styleObj} container>
          <Grid item xs={7}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <TableContainer>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>TIME</StyledTableCell>
                        <StyledTableCell>PMU ID</StyledTableCell>
                        <StyledTableCell>BUS ID</StyledTableCell>
                        <StyledTableCell align="center">
                          ANOMALY DETECTED
                        </StyledTableCell>
                        <StyledTableCell>LOCATION</StyledTableCell>
                        <StyledTableCell>CONFIDENTIAL LEVEL</StyledTableCell>
                        <StyledTableCell>DETECTOR</StyledTableCell>
                        <StyledTableCell>VIEW</StyledTableCell>
                        <StyledTableCell>EVENT TYPE</StyledTableCell>
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
                                  <Button>Cm</Button>
                                  <Button>F</Button>
                                  <Button>Ro</Button>
                                  {/* color="secondary" */}
                                </ButtonGroup>
                              </div>
                            </td>

                            <td>32.37111871</td>
                            <td>1</td>
                            <td>
                              <IconButton
                                color="secondary"
                                aria-label="upload picture"
                                component="span"
                                style={{ padding: "5px" }}
                              >
                                <VisibilityIcon
                                  id={anomaly.id}
                                  onClick={() => this.loadCharts(anomaly.id)}
                                />
                              </IconButton>
                            </td>
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

            
          </Grid>
          <Grid style={styleObjCharts} container xs={5}>
          <Grid style={{ marginTop: "20px" }} item xs={12}>
              {/* <Paper elevation={3}> */}
                <Maps />
              {/* </Paper> */}
            </Grid>
            {/* <Grid style={{ marginTop: "50px", marginLeft: "-25px" }} item xs={5}>
              {renderLineChart2}
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid style={{ marginTop: "50px", marginLeft: "-22px" }} item xs={5}>
              {renderLineChart}
            </Grid> */}

            {/* <Grid style={styleObjCharts2} item xs={5}>
              {renderLineChart3}
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid style={styleObjCharts2} item xs={5}>
              {renderLineChart4}
            </Grid> */}

            {/* <Grid style={styleObjCharts2} item xs={5}>
              {renderLineChart5}
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid style={styleObjCharts2} item xs={5}>
              {renderLineChart6}
            </Grid> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EventRootCauseAnalysis;
