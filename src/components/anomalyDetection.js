import React, { Component } from "react";
import axios from "axios";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import Grid from "@material-ui/core/Grid";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import Paper from "@material-ui/core/Paper";
import chart_back from "../App.css";
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
  }

  nextPage() {
    console.log("next " + this.state.page);
    API_URL = "http://127.0.0.1:9002/result_events/" + (this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
    this.getData();
  }

  getData() {
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ posts: res.data || [] }));
  }

  prevPage() {
    console.log("prev " + this.state.page);
    API_URL = "http://127.0.0.1:9002/result_events/" + (this.state.page - 1);
    this.setState({ page: this.state.page - 1 });
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
      <LineChart width={300} height={200} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    );

    const styleObj = {
      paddingTop: "10px",
    };
    const styleObjCharts = {
      paddingTop: "14px",
    };

    return (
      <div class="row">
        <Grid style={styleObj} container spacing={1}>
          <Grid item xs={6}>
            <table className="dataTable">
              <thead>
                <tr>
                  <th>WINDOW TIME</th>
                  <th>PMU ID</th>
                  <th>BUS ID</th>
                  <th>ANOMALIES DETECTED</th>
                  <th>CONFIDENTIAL LEVEL</th>
                  <th>DETECTOR</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.length > 0 ? (
                  this.state.posts.map((anomaly) => (
                    <tr id={anomaly.id}>
                      <td>
                        <div>
                          <p style={{ margin: "0", fontSize: "0.7rem" }}>
                            {anomaly.event_date}
                          </p>
                          <p style={{ margin: "0", fontSize: "0.7rem" }}>
                            {anomaly.event_time}
                          </p>
                        </div>
                      </td>
                      <td>{anomaly.pmu_id}</td>
                      <td>{anomaly.bus_id}</td>
                      <td>
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
                      </td>

                      <td>32.37111871</td>
                      <td>1</td>
                    </tr>
                  ))
                ) : (
                  <td>Loading...</td>
                )}
              </tbody>
            </table>

            <IconButton onClick={this.nextPage} aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={this.prevPage} aria-label="delete">
              <AlarmIcon />
            </IconButton>
          </Grid>
          <Grid style={styleObjCharts} container spacing={7} xs={6}>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>{renderLineChart}</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AnomalyDetection;
