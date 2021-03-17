// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import TabPanel from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// export default function Navbar(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="red"
//         textColor="primary"
//       >
//         <Tab label="SyncAED Detection"></Tab>
//         <Tab label="Anomaly Detection" />
//         <Tab label="Event Detection" />
//         <Tab label="Graphs" />
//       </Tabs>
//       </Paper>
//       {/* <TabPanel>
//            <Main syncaed={props.syncaed}/>
//          </TabPanel> */}

//       {/* <TabPanel>
//            <h2>Event Detection table</h2>
//            <h2>Graphs</h2>
//          </TabPanel> */}

//   );
// }
// // export default function Navbar(props) {

// //   return (
// //     <div>
// //       <Tabs>
// //         <TabList style={{fontWeight:"600"}}>
// //           <Tab>SyncAED Detection</Tab>
// //           <Tab>Anomaly Detection</Tab>
// //           <Tab>Event Detection</Tab>
// //         </TabList>

// //         <TabPanel>
// //           <Main syncaed={props.syncaed}/>
// //         </TabPanel>
// //         <TabPanel>
// //         {/* <AnomalyTab /> */}
// //         </TabPanel>
// //         <TabPanel>
// //           <h2>Event Detection table</h2>
// //           <h2>Graphs</h2>
// //         </TabPanel>
// //       </Tabs>
// //     </div>
// //   );
// // }
