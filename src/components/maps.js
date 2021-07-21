import React, { Component } from "react";
import {
  MapContainer,
  CircleMarker,
  Polyline,
  TileLayer,
  Popup,
} from "react-leaflet";
import axios from "axios";
// import blinking from "../App.css";
let API_URL = "http://127.0.0.1:9002/main_mapdata";
let MAP_EDGES = "http://127.0.0.1:9002/map_edges";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map_data: [],
      map_edges: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    const data = axios.get(API_URL);
    data.then((res) => this.setState({ map_data: res.data || [] }));
    const edgeData = axios.get(MAP_EDGES);
    edgeData.then((res) => this.setState({ map_edges: res.data || [] }));
  }

  render() {
    const center = [47.1, -119.6920787];
    const blueOptions = { color: "blue" };
    const greenOptions = {
      // animation: "fade 1s infinite alternate",
      color: "green",
    };

    return (
      <MapContainer
        className="map"
        style={{
          marginTop: "-0.2rem",
          marginLeft: "1px",
          border: "solid",
          width: "43rem",
          height: "38rem",
        }}
        center={center}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.map_edges.length > 0 ? (
          this.state.map_edges.map((medge) => (
            <Polyline
              pathOptions={blueOptions}
              positions={[
                [medge.from_latitude, medge.from_longitude],
                [medge.to_latitude, medge.to_longitude],
              ]}
            />
          ))
        ) : (
          <td>Loading...</td>
        )}

        {this.state.map_data.length > 0 ? (
          this.state.map_data.map((mdata) => {
            return mdata.bus_status > 0 ? (
              <CircleMarker
                center={[mdata.latitude, mdata.longitude]}
                fillOpacity={1}
                radius={16}
                className="blinking-circle"
                // stroke={false}
              >
                <Popup>
                  Bus ID : {mdata.bus_id} <br></br> Bus Name : {mdata.bus_name}
                  <br></br> Lat : {mdata.latitude} <br></br> Lon :
                  {mdata.longitude}
                </Popup>
              </CircleMarker>
            ) : (
              <CircleMarker
                center={[mdata.latitude, mdata.longitude]}
                pathOptions={blueOptions}
              >
                <Popup>
                  Bus ID : {mdata.bus_id} <br></br> Bus Name : {mdata.bus_name}
                  <br></br> Lat : {mdata.latitude} <br></br> Lon :
                  {mdata.longitude}
                </Popup>
              </CircleMarker>
            );
          })
        ) : (
          <td>Loading...</td>
        )}
      </MapContainer>
    );
    }
}

export default Maps;
