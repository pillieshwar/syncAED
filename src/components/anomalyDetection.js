import React, { Component } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import Grid from "@material-ui/core/Grid";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import Paper from "@material-ui/core/Paper";
import chart_back from "../App.css";
import { ButtonGroup, Button, Fab, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { StayPrimaryLandscape } from "@material-ui/icons";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { createMuiTheme, colors } from "@material-ui/core";

let API_URL = "http://127.0.0.1:9002/result_events/0";
class AnomalyDetection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      subsetdata: [],
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  }
  render() {
    const data = [
      {
        name: "Page A",
        uv: 4,
        pv: 2.4,
        amt: 2.4,
      },
      {
        name: "Page B",
        uv: 3.0,
        pv: 1.398,
        amt: 2.21,
      },
      {
        name: "Page C",
        uv: 2.0,
        pv: 9.8,
        amt: 2.29,
      },
      {
        name: "Page D",
        uv: 2.78,
        pv: 3.908,
        amt: 2.0,
      },
      {
        name: "Page E",
        uv: 1.89,
        pv: 4.8,
        amt: 2.181,
      },
      {
        name: "Page F",
        uv: 2.39,
        pv: 3.8,
        amt: 2.5,
      },
      {
        name: "Page G",
        uv: 3.49,
        pv: 4.3,
        amt: 2.1,
      },
    ];

    const renderLineChart = (
      <LineChart width={300} height={180} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{
            value: "Time",
            position: "bottom",
          }}
        />
        <YAxis
          label={{
            value: "V",
            angle: -90,
            position: "left",
          }}
        />
      </LineChart>
    );

    const renderLineChart2 = (
      <LineChart width={300} height={180} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#f57c00" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{
            value: "Time",
            position: "bottom",
          }}
        />
        <YAxis
          label={{
            value: "V",
            angle: -90,
            position: "left",
          }}
        />
      </LineChart>
    );

    const renderLineChart3 = (
      <LineChart width={300} height={180} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#e33371" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{
            value: "Time",
            position: "bottom",
          }}
        />
        <YAxis
          label={{
            value: "V",
            angle: -90,
            position: "left",
          }}
        />
      </LineChart>
    );

    const renderLineChart4 = (
      <LineChart width={300} height={180} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#388e3c" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{
            value: "Time",
            position: "bottom",
          }}
        />
        <YAxis
          label={{
            value: "V",
            angle: -90,
            position: "left",
          }}
        />
      </LineChart>
    );

    const renderLineChart5 = (
      <LineChart width={300} height={180} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#ff9800" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{
            value: "Time",
            position: "bottom",
          }}
        />
        <YAxis
          label={{
            value: "V",
            angle: -90,
            position: "left",
          }}
        />
      </LineChart>
    );

    const renderLineChart6 = (
      <LineChart width={300} height={180} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#dc004e" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{
            value: "Time",
            position: "bottom",
          }}
        />
        <YAxis
          label={{
            value: "V",
            angle: -90,
            position: "left",
          }}
        />
      </LineChart>
    );

    const styleObj = {
      paddingTop: "10px",
    };
    const styleObjCharts = {
      paddingTop: "14px",
    };

    const styleObjCharts2 = {
      marginTop: "-180px",
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
        <Grid style={styleObj} container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <table style={{ minWidth: 650 }} className="dataTable">
                <thead>
                  <tr>
                    <th>WINDOW TIME</th>
                    <th>PMU ID</th>
                    <th>BUS ID</th>
                    <th>ANOMALIES DETECTED</th>
                    <th>CONFIDENTIAL LEVEL</th>
                    <th>DETECTOR</th>
                    <th>VIEW</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.posts.length > 0 ? (
                    this.state.posts.map((anomaly) => (
                      <tr id={anomaly.id}>
                        <td>
                          <div>
                            <p style={{ margin: "0" }}>{anomaly.event_date}</p>
                            <p style={{ margin: "0" }}>{anomaly.event_time}</p>
                          </div>
                        </td>
                        <td>{anomaly.pmu_id}</td>
                        <td>{anomaly.bus_id}</td>
                        {/* <td>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Fab style={fabStyle} size="small">
                            Va
                          </Fab>
                          <Fab style={fabStyle} size="small">
                            Vm
                          </Fab>
                          <Fab style={fabStyle} size="small">
                            Ca
                          </Fab>
                          <Fab
                            style={fabStyle}
                            // style={{
                            //   background:
                            //     "linear-gradient(45deg, #fafafa 30%, #d32f2f 90%)",
                            // }}
                            size="small"
                          >
                            Cm
                          </Fab>
                          <Fab style={fabStyle} size="small">
                            F
                          </Fab>
                          <Fab style={fabStyle} size="small">
                            Ro
                          </Fab>
                        </div>
                      </td> */}
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
                        {/* <td>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div
                            style={{
                              backgroundImage: `${
                                anomaly.vol_angle
                                  ? "linear-gradient(to bottom,#61FBA9 , #228B1B)"
                                  : "linear-gradient(to bottom,#FFFFFF , #5D5D5D)"
                              }`,
                            }}
                            className="anomalyNames"
                          >
                            Va
                          </div>
                          <div
                            style={{
                              backgroundImage: `${
                                anomaly.vol_mag
                                  ? "linear-gradient(to bottom,#61FBA9 , #228B1B)"
                                  : "linear-gradient(to bottom,#FFFFFF , #5D5D5D)"
                              }`,
                            }}
                            className="anomalyNames"
                          >
                            Vm
                          </div>
                          <div
                            style={{
                              backgroundImage: `${
                                anomaly.current_angle
                                  ? "linear-gradient(to bottom,#61FBA9 , #228B1B)"
                                  : "linear-gradient(to bottom,#FFFFFF , #5D5D5D)"
                              }`,
                            }}
                            className="anomalyNames"
                          >
                            Ca
                          </div>
                          <div
                            style={{
                              backgroundImage: `${
                                anomaly.current_mag
                                  ? "linear-gradient(to bottom,#61FBA9 , #228B1B)"
                                  : "linear-gradient(to bottom,#FFFFFF , #5D5D5D)"
                              }`,
                            }}
                            className="anomalyNames"
                          >
                            Cm
                          </div>
                          <div
                            style={{
                              backgroundImage: `${
                                anomaly.frequency
                                  ? "linear-gradient(to bottom,#61FBA9 , #228B1B)"
                                  : "linear-gradient(to bottom,#FFFFFF , #5D5D5D)"
                              }`,
                            }}
                            className="anomalyNames"
                          >
                            F
                          </div>
                          <div
                            style={{
                              backgroundImage: `${
                                anomaly.rocof
                                  ? "linear-gradient(to bottom,#61FBA9 , #228B1B)"
                                  : "linear-gradient(to bottom,#FFFFFF , #5D5D5D)"
                              }`,
                            }}
                            className="anomalyNames"
                          >
                            Ro
                          </div>
                        </div>
                      </td> */}

                        <td>32.37111871</td>
                        <td>1</td>
                        <td>
                          <IconButton
                            color="secondary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <td>Loading...</td>
                  )}
                </tbody>
              </table>
              <div style={{ float: "right" }}>
                <IconButton
                  color="primary"
                  variant="contained"
                  onClick={this.prevPage}
                  aria-label="Back"
                >
                  <ArrowBackIosRoundedIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  variant="contained"
                  backgroundColor="primary"
                  onClick={this.nextPage}
                  aria-label="Next"
                >
                  <ArrowForwardIosRoundedIcon />
                </IconButton>
              </div>
            </Paper>
          </Grid>
          <Grid style={styleObjCharts} container spacing={4} xs={6}>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart2}</Paper>
            </Grid>
            <Grid style={styleObjCharts2} item xs={6}>
              <Paper elevation={3}>{renderLineChart3}</Paper>
            </Grid>
            <Grid style={styleObjCharts2} item xs={6}>
              <Paper elevation={3}>{renderLineChart4}</Paper>
            </Grid>
            <Grid style={styleObjCharts2} item xs={6}>
              <Paper elevation={3}>{renderLineChart5}</Paper>
            </Grid>
            <Grid style={styleObjCharts2} item xs={6}>
              <Paper elevation={3}>{renderLineChart6}</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AnomalyDetection;
