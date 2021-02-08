import AnomalyGraph from './anomalyGraphs'
import React from 'react'
import anomalyData from '../data/anamolyData'

const AnomalyTab = ()=>{
    
    return(
    <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
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
                anomalyData.map(anomaly=><tr>
                  
                  <td>
                    <div className="firstCell">               
                    <p style={{margin:"0", fontSize:'0.7rem'}}>{anomaly.windowTime.date}</p>
                    <p style={{margin:"0", fontSize:'0.7rem'}}>Start Time: {anomaly.windowTime.startTime}</p>
                    <p style={{margin:"0", fontSize:'0.7rem'}}>End Time: {anomaly.windowTime.endTime}</p>
                    </div>
                  </td>
                  <td>{anomaly.pmu_id}</td>
                  <td>{anomaly.bus_id}</td>
                  <td>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{backgroundImage: `${anomaly.anomalies_detected.Va?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}} className="anomalyNames">Va</div>
                    <div style={{backgroundImage: `${anomaly.anomalies_detected.Vm?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Vm</div>
                    <div style={{backgroundImage: `${anomaly.anomalies_detected.Ca?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Ca</div>
                    <div style={{backgroundImage: `${anomaly.anomalies_detected.Cm?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Cm</div>
                    <div style={{backgroundImage: `${anomaly.anomalies_detected.F?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">F</div>
                    <div style={{backgroundImage: `${anomaly.anomalies_detected.Ro?"linear-gradient(to bottom,#61FBA9 , #228B1B)":"linear-gradient(to bottom,#FFFFFF , #5D5D5D)"}`}}  className="anomalyNames">Ro</div>
                    </div>
                    
                  </td>
                  
                  <td>{anomaly.confidence_level}</td>
                  <td>{anomaly.detector}</td>
                  <td><button className="showButton">SHOW</button></td>
                </tr>)
              }
            </tbody>
          </table>
        
        </div>
        <div style={{padding:"2rem",margin:"5rem",display:"flex",flexWrap:"wrap",width:"40rem",  height:"40rem", backgroundColor:"white"}}>
       <AnomalyGraph />
       <AnomalyGraph />
       <AnomalyGraph />
       <AnomalyGraph />
       <AnomalyGraph />
       <AnomalyGraph />
        </div>
     
    </div>


    )
}

export default AnomalyTab
 
