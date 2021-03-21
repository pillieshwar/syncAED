import React, { Component } from "react";
import {
  MapContainer,
  CircleMarker,
  Polyline,
  TileLayer,
  Popup,
} from "react-leaflet";

// let myIcon = L.icon({
//   iconUrl:
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41],
// });

class Maps extends Component {
  render() {
    const center = [48.60211262, -120.13948226];

    // const fourteenBus = [
    //   [47.79752157, -117.650922],
    //   [47.30557013, -120.1623439],
    //   [46.26544281, -121.7298936],
    //   [48.60211262, -120.1394822],
    //   [50.16355756, -120.5154517],
    //   [49.163558, -123.045283],
    //   [49.863558, -121.580367],
    //   [51.265793, -118.7182326],
    //   [51.28012672, -121.2624264],
    //   [50.15916219, -123.7203418],
    //   [46.61726649, -121.7036596],
    //   [47.78990954, -120.5751145],
    //   [47.46372574, -121.890345],
    //   [47.46372574, -119.5751145],
    // ];

    const polyline1 = [
      [47.79752157, -117.650922],
      [47.30557013, -120.1623439],
    ];
    const polyline2 = [
      [47.79752157, -117.650922],
      [50.16355756, -120.5154517],
    ];
    const polyline3 = [
      [47.30557013, -120.1623439],
      [46.26544281, -121.7298936],
    ];
    const polyline4 = [
      [47.30557013, -120.1623439],
      [48.60211262, -120.1394822],
    ];
    const polyline5 = [
      [47.30557013, -120.1623439],
      [50.16355756, -120.5154517],
    ];
    const polyline6 = [
      [46.26544281, -121.7298936],
      [48.60211262, -120.1394822],
    ];
    const polyline7 = [
      [48.60211262, -120.1394822],
      [50.16355756, -120.5154517],
    ];
    const polyline8 = [
      [49.163558, -123.045283],
      [46.61726649, -121.7036596],
    ];
    const polyline9 = [
      [49.163558, -123.045283],
      [47.78990954, -120.5751145],
    ];
    const polyline10 = [
      [49.163558, -123.045283],
      [47.46372574, -121.890345],
    ];
    const polyline11 = [
      [49.863558, -121.580367],
      [51.265793, -118.7182326],
    ];
    const polyline12 = [
      [49.863558, -121.580367],
      [51.28012672, -121.2624264],
    ];
    const polyline13 = [
      [51.28012672, -121.2624264],
      [50.15916219, -123.7203418],
    ];
    const polyline14 = [
      [51.28012672, -121.2624264],
      [47.46372574, -119.5751145],
    ];
    const polyline15 = [
      [50.15916219, -123.7203418],
      [46.61726649, -121.7036596],
    ];
    const polyline16 = [
      [47.78990954, -120.5751145],
      [47.46372574, -121.890345],
    ];
    const polyline17 = [
      [47.46372574, -121.890345],
      [47.46372574, -119.5751145],
    ];

    const fillBlueOptions = { fillColor: "blue" };
    // const blackOptions = { color: "black" };
    const limeOptions = { color: "blue" };
    const purpleOptions = { color: "green" };
    const redOptions = { color: "red" };

    return (
      <MapContainer
        className="map"
        style={{
          marginTop: "-0.4rem",
          borderRadius: "0.9rem",
          border: "solid",
          width: "44rem",
        }}
        center={center}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} /> */}

        <CircleMarker
          center={[47.79752157, -117.650922]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline pathOptions={limeOptions} positions={polyline1} />
        <Polyline pathOptions={limeOptions} positions={polyline2} />
        <Polyline pathOptions={limeOptions} positions={polyline3} />
        <Polyline pathOptions={limeOptions} positions={polyline4} />
        <Polyline pathOptions={limeOptions} positions={polyline5} />
        <Polyline pathOptions={limeOptions} positions={polyline6} />
        <Polyline pathOptions={limeOptions} positions={polyline7} />
        <Polyline pathOptions={limeOptions} positions={polyline8} />
        <Polyline pathOptions={limeOptions} positions={polyline9} />
        <Polyline pathOptions={limeOptions} positions={polyline10} />
        <Polyline pathOptions={limeOptions} positions={polyline11} />
        <Polyline pathOptions={limeOptions} positions={polyline12} />
        <Polyline pathOptions={limeOptions} positions={polyline13} />
        <Polyline pathOptions={limeOptions} positions={polyline14} />
        <Polyline pathOptions={limeOptions} positions={polyline15} />
        <Polyline pathOptions={limeOptions} positions={polyline16} />
        <Polyline pathOptions={limeOptions} positions={polyline17} />

        <CircleMarker
          center={[47.30557013, -120.1623439]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC :
            47.30557013,-120.1623439 <br></br> Anomaly : None
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[46.26544281, -121.7298936]}
          pathOptions={redOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 46.26544281,
            -121.7298936 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[48.60211262, -120.1394822]}
          pathOptions={purpleOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 48.60211262,
            -120.1394822 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[50.16355756, -120.5154517]}
          pathOptions={purpleOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 50.16355756,
            -120.5154517 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[49.163558, -123.045283]}
          pathOptions={purpleOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 49.163558,
            -123.045283 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[49.863558, -121.580367]}
          pathOptions={purpleOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 49.863558,
            -121.580367 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[51.265793, -118.7182326]}
          pathOptions={purpleOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 51.265793,
            -118.7182326 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[51.28012672, -121.2624264]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 51.28012672,
            -121.2624264 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[50.15916219, -123.7203418]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>
            BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC : 50.15916219,
            -123.7203418 <br></br> Anomaly : 1
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[46.61726649, -121.7036596]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <CircleMarker
          center={[47.78990954, -120.5751145]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <CircleMarker
          center={[47.46372574, -121.890345]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <CircleMarker
          center={[47.46372574, -119.5751145]}
          pathOptions={fillBlueOptions}
          radius={8}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
      </MapContainer>
    );
  }
}

export default Maps;
