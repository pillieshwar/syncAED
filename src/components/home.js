import React, { Component } from "react";
import Header from "./header";
import Navbar from "./navbar";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syncaed:[]
    };
  }


  componentDidMount() {
    fetch("http://127.0.0.1:9002/events")
      .then(res => res.json())
      .then(
        (result) => {
          
          let syncaed = result.results
          console.log(syncaed)
          this.setState({
            syncaed:syncaed
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {

    
    return (
      <div>
        <Header />
        <Navbar syncaed={this.state.syncaed}/>
        
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;

