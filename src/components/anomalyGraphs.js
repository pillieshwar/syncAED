import React from 'react'
import {Line} from 'react-chartjs-2'

const AnomalyGraph = (props)=>{
    const data = {
        labels: props.timeWindow,
        datasets:[
          {
            label:props.label,
            data:props.yData
          }
        ]
      }

      return (
         <div style={{backgroundColor:" #ffffff"}}>
            <Line data={data} width={400}
            height={250}
            options={{ maintainAspectRatio: false }} /> 
         </div>
            
         
               
          
      )

}

export default AnomalyGraph