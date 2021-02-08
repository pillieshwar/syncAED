import React from "react";
// import anomalyData from '../data/anamolyData'
import Maps from './maps'
import eventData from '../data/eventData'
import ExampleApp from './modal'
export default function Main(props) {


  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      
        <Maps />
      
      <div style={{marginRight:"1.5rem"}}>
        
         <p className="tableTitle">Anomaly Detection Table</p> 
          <div style={{height: "22rem",overflowY: "auto"}}>
          <table className="dataTable">
            <thead>
            <tr>
              
            <th >
              WINDOW TIME
            </th >
            <th>
              PMU ID
            </th>
            <th>
              BUS ID
            </th>
            <th>
              ANOMALIES DETECTED
            </th>
            <th>
              CONFIDENTIAL LEVEL
            </th>
            <th>
              DETECTOR 
            </th>
            <th>
               
            </th>
            </tr>
            </thead>
            <tbody>
              {
               props.syncaed.length>0?( props.syncaed.map(anomaly=>
               <tr id={anomaly.id}>
                  
                  <td>
                    <div>               
                    <p style={{margin:"0", fontSize:'0.7rem'}}>{anomaly.event_date}</p>
                    <p style={{margin:"0", fontSize:'0.7rem'}}>Start Time: {anomaly.event_time}</p>
                    
                    </div>
                  </td>
                  <td>{anomaly.pmu_id}</td>
                  <td>{anomaly.bus_id}</td>
                  <td>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{backgroundImage: `${anomaly.vol_angle?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}} className="anomalyNames">Va</div>
                    <div style={{backgroundImage: `${anomaly.vol_mag?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Vm</div>
                    <div style={{backgroundImage: `${anomaly.current_angle?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Ca</div>
                    <div style={{backgroundImage: `${anomaly.current_mag?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Cm</div>
                    <div style={{backgroundImage: `${anomaly.frequency?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">F</div>
                    <div style={{backgroundImage: `${anomaly.rocof?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Ro</div>
                    </div>
                    
                  </td>
                  
                  <td>32.37111871</td>
                  <td>1</td>
                  <td><ExampleApp syncaed={props.syncaed} id={anomaly.id} busID = {anomaly.bus_id}/></td>
                </tr>)
                ):<td>Loading...</td> }
            </tbody>
          </table>
          </div>

          <p className="tableTitle">Event Detection Table</p>

          <div style={{height: "22rem",overflowY: "auto"}}>
          <table className="dataTable">
            <thead>
            <tr>
              
            <th >
              WINDOW TIME
            </th >
            <th>
              PMU ID
            </th>
            <th>
              EVENT TYPE
            </th>
            <th>
              BUS ID
            </th>
            <th>
              CONFIDENTIAL LEVEL
            </th>
            <th>
              BAD DATA FLAG
            </th>
            <th>
              SEVERITY
            </th>
            <th>
               
            </th>
            </tr>
            </thead>
            <tbody>
              {
                eventData.map(eventData=>
                <tr>
                  
                  <td>
                    <div>
                    <p style={{margin:"0", fontSize:'0.7rem'}}>{eventData.windowTime.date}</p>
                    <p style={{margin:"0", fontSize:'0.7rem'}}>Start Time: {eventData.windowTime.startTime}</p>
                    </div>
                    
                  </td>
                  <td>{eventData.pmu_id}</td>
                  <td>{eventData.event_type}</td>
                  <td>{eventData.bus_id}</td>
                  <td>{eventData.confidence_level}</td>
                  <td>{eventData.bad_flag_data}</td>
                  <td>{eventData.severity}</td>
                  <td><button className="showButton">SHOW</button></td>
                </tr>)
              }
            </tbody>
          </table></div>
          
      </div>
    </div>
  );
}
