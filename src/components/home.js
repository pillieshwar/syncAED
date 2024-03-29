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
import Badge from "@material-ui/core/Badge";

let API_URL = "http://127.0.0.1:9002/main_result_events/0";
let API_LOCALIZATION_URL =
  "http://127.0.0.1:9002/result_pmu_localization_overview/0";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      locpage: 0,
      subsetdata: [],
      chart_data: [],
      loc: [],
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadCharts = this.loadCharts.bind(this);
    this.nextPageLoc = this.nextPageLoc.bind(this);
    this.prevPageLoc = this.prevPageLoc.bind(this);
  }

  loadCharts(id) {
    console.log(id);
    let API_CHART_URL = "http://127.0.0.1:9002/result_events/chart_data/" + id;
    const data = axios.get(API_CHART_URL);
    data.then((res) => this.setState({ chart_data: res.data || [] }));
  }

  nextPage() {
    //console.log("next " + this.state.page);
    API_URL =
      "http://127.0.0.1:9002/main_result_events/" + (this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
    this.getData();
  }

  setPage(id) {
    API_URL = "http://127.0.0.1:9002/main_result_events/" + id;
    this.setState({ page: id });
    this.getData();
  }

  nextPageLoc() {
    console.log("next " + this.state.locpage);
    API_LOCALIZATION_URL =
      "http://127.0.0.1:9002/result_pmu_localization_overview/" +
      (this.state.locpage + 1);
    this.setState({ locpage: this.state.locpage + 1 });
    this.getDataLoc();
  }

  setPageLoc(id) {
    console.log("idrrr " + id);
    API_LOCALIZATION_URL =
      "http://127.0.0.1:9002/result_pmu_localization_overview/" + id;
    console.log("url: " + API_URL);
    this.setState({ locpage: id });
    this.getDataLoc();
  }

  handleChange() {
    console.log(this.state.page);
  }

  getData() {
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ posts: res.data || [] }));
  }

  getDataLoc() {
    const data = axios.get(API_LOCALIZATION_URL);
    data.then((res) => this.setState({ loc: res.data || [] }));
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

  prevPageLoc() {
    console.log("prev " + this.state.locpage);
    if (this.state.locpage >= 0) {
      API_LOCALIZATION_URL =
        "http://127.0.0.1:9002/result_pmu_localization_overview/" +
        (this.state.locpage - 1);
    }
    if (this.state.locpage > 0) {
      this.setState({ locpage: this.state.locpage - 1 });
    }
    this.getDataLoc();
  }

  componentDidMount() {
    console.log("componentDidMount");
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ posts: res.data || [] }));
    const locdata = axios.get(API_LOCALIZATION_URL);
    locdata.then((res) => this.setState({ loc: res.data || [] }));
    console.log("loc", this.state.loc);
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

    var btn_color_va = "primary";
    var btn_color_ca = "primary";
    var btn_color_vm = "primary";
    var btn_color_cm = "primary";
    var btn_color_f = "primary";
    var btn_color_rocof = "primary";

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
                        <StyledTableCell>END TIME</StyledTableCell>
                        <StyledTableCell>PMU ID</StyledTableCell>
                        <StyledTableCell>BUS ID</StyledTableCell>
                        <StyledTableCell align="center">
                          ANOMALY DETECTED
                        </StyledTableCell>
                        <StyledTableCell>CONFIDENCE LEVEL</StyledTableCell>
                        <StyledTableCell>
                          ANOMALY CLASSIFICATION
                        </StyledTableCell>
                        {/* <StyledTableCell>
                          ANOMALY CLASSIFICATION
                        </StyledTableCell> */}
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
                                  {(() => {
                                    const tt = anomaly.event_time;
                                    if (tt.substring(0, 5) === "00:47") {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "17:35" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "16:48" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "18:23" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "15:11" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "01:35" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "02:24" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "15:59" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "19:12" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "19:59" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "20:47" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "21:36" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "22:23:" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "23:11" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "00:00" &&
                                      anomaly.pmu_id === "PMU_03"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_cm = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else if (
                                      tt.substring(0, 5) === "03:59" &&
                                      anomaly.pmu_id === "PMU_01"
                                    ) {
                                      btn_color_va = "secondary";
                                      btn_color_ca = "secondary";
                                      btn_color_rocof = "secondary";
                                    } else {
                                      btn_color_va = "primary";
                                      btn_color_ca = "primary";
                                      btn_color_rocof = "primary";
                                      btn_color_vm = "primary";
                                      btn_color_cm = "primary";
                                      btn_color_f = "primary";
                                    }
                                  })()}

                                  <Button color={btn_color_va}>Va</Button>
                                  <Button color={btn_color_vm}>Vm</Button>
                                  <Button color={btn_color_ca}>Ca</Button>
                                  <Button color={btn_color_cm}>Cm</Button>
                                  <Button color={btn_color_f}>F</Button>
                                  <Button color={btn_color_rocof}>Ro</Button>
                                </ButtonGroup>
                              </div>
                            </td>

                            <td>32.37111871</td>
                            <td>Missing Data</td>
                          </tr>
                        ))
                      ) : (
                        <td>{eventData.pmu_id}</td>
                      )}
                    </tbody>
                    <div
                      style={{
                        float: "right",
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px",
                      }}
                    ></div>
                  </Table>

                  <IconButton
                    color="primary"
                    variant="contained"
                    onClick={this.prevPage}
                    aria-label="Back"
                    style={{ padding: "5px" }}
                  >
                    <ArrowBackIosRoundedIcon />
                  </IconButton>

                  {this.state.posts.map((anomaly, id) => (
                    <IconButton
                      color="primary"
                      variant="contained"
                      style={{ padding: "10px", height: "20px", width: "10px" }}
                    >
                      {this.state.page < 2 ? (
                        <IconButton
                          color="primary"
                          variant="contained"
                          onClick={() => this.setPage(id)}
                          style={{
                            padding: "10px",
                            height: "20px",
                            width: "20px",
                            fontSize: "10px",
                          }}
                        >
                          {id + 1}
                        </IconButton>
                      ) : (
                        <IconButton
                          color="primary"
                          variant="contained"
                          onClick={() => this.setPage(this.state.page + id - 2)}
                          aria-label="Back"
                          style={{
                            padding: "10px",
                            height: "20px",
                            width: "20px",
                            fontSize: "10px",
                          }}
                        >
                          {this.state.page + id - 1}
                        </IconButton>
                      )}
                    </IconButton>
                  ))}

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
