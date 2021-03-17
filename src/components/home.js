import React, { Component } from "react";
import axios from "axios";
import Main from "./main";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syncaed: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:9002/events")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result ----> " + result.map_results);
          let syncaed = result.results;
          console.log(syncaed);
          this.setState({
            syncaed: syncaed,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    console.log("home syncaed len : " + this.state.syncaed.length);
    return (
      <div>
        <Main syncaed={this.state.syncaed} />
      </div>
    );
  }
}

export default Home;
