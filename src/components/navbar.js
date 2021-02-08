import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Main from "./main";
import AnomalyTab from './anomalyTab'
export default function Navbar(props) {
  
  return (
    <div>
      <Tabs>
        <TabList style={{fontWeight:"600"}}>
          <Tab>SyncAED Detection</Tab>
          <Tab>Anomaly Detection</Tab>
          <Tab>Event Detection</Tab>
        </TabList>

        <TabPanel>
          <Main syncaed={props.syncaed}/>
        </TabPanel>
        <TabPanel>
        {/* <AnomalyTab /> */}
        </TabPanel>
        <TabPanel>
          <h2>Event Detection table</h2> 
          <h2>Graphs</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
