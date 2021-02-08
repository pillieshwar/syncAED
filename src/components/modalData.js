import React from 'react';

const ModalData =(props)=> {

    const result = props.modalData.map(item=>(
          <table className="dataTable">
            <thead>
              <th>Stats</th>
              <th>Readings</th>
            </thead>
            <tbody>
              <tr>
                <td>
                 Bus ID 
                </td>
                <td>
                {item.bus_id}
                </td>
              </tr>
              <tr>
                <td>
                  PMU ID 
                </td>
                <td>
                {item.pmu_id}
                </td>
                </tr>
                <tr>

                <td>
                  Event Date 
                </td>
                <td>
                {item.event_date}
                </td>
                </tr>
                <tr>
                <td>
                  Event Time 
                </td>
                <td>
                {item.event_time}
                </td>
                </tr>
                <tr>
                <td>
                  Voltage Angle
                </td>
                <td>
                {item.vol_angle}
                </td>
                </tr>
                <tr>
                <td>
                  Voltage Magnitude 
                </td>
                <td>
                  {item.vol_mag}
                </td>
                </tr>
                <tr>
                  
                <td>
                  Current Angle
                </td>
                <td>
                {item.current_angle}
                </td>
                </tr>
                <tr>

                <td>
                  Current Magnitude 
                </td>
                <td>
                {item.current_mag}
                </td>
                </tr><tr>

                <td>
                  Frequency 
                </td>
                <td>
                {item.frequency}
                </td>
                </tr>
                <tr>

                <td>
                  ROCOF 
                </td>
                <td>
                {item.rocof}
                </td>
              </tr>
            </tbody>
          </table>
        ))
        
      
    return (
        <div>
            {result}
        </div>
    );
}

export default ModalData;