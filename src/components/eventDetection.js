import React, { Component } from "react";
import axios from "axios";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";

const API_URL = "http://127.0.0.1:9002/result_events";

class EventDetection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      subsetdata: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  nextPage() {
    console.log("next");
    this.setState({ page: this.state.page + 1 });
    this.updatePage();
  }

  prevPage() {
    console.log("prev");
    this.setState({ page: this.state.page - 1 });
    this.updatePage();
  }

  componentDidMount() {
    console.log("componentDidMount");
    const data = axios.get(API_URL);
    data.then((res) =>
      this.setState({ posts: res.data || [] }, this.updatePage)
    );
  }

  updatePage() {
    let arr = [];
    const { posts, page } = this.state;
    console.log("page : " + page);
    for (let i = page * 10; i < page * 10 + 10; i++) {
      arr.push(this.state.posts[i]);
    }
    this.setState({ subsetdata: arr });
  }

  fetchData() {
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ posts: res.data || [] }));
  }
  render() {
    return (
      <div>
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
            {this.state.subsetdata.length > 0 ? (
              this.state.subsetdata.map((anomaly) => (
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
      </div>
    );
  }
}

export default EventDetection;
