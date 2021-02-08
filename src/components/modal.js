import React from 'react'
import Modal from 'react-modal'
import AnomalyGraph from './anomalyGraphs'
import ModalData from './modalData'
class ExampleApp extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal =(busID, id)=> {
      let modalData = this.props.syncaed.filter(item => id===item.id)  
      let temp = this.props.syncaed.filter(item=>item.bus_id===busID)
      let timeWindow=temp.map(time=>time.event_time)
      let Va = temp.map(va=>va.vol_angle)
      let Vm = temp.map(vm=>vm.vol_mag)
      let Ca = temp.map(ca=>ca.current_angle)
      let Cm = temp.map(cm=>cm.current_mag)
      let F = temp.map(f=>f.frequency)
      let Rocof = temp.map(rocof=>rocof.rocof)
      this.setState({ 
      modalData,
      showModal: true,
      busid:busID,
      timeWindow,
      Va,
      Vm,
      Ca,
      Cm,
      F,
      Rocof
      
    })
  }
    handleCloseModal =()=> {
      this.setState({ showModal: false });
    }
    
    render () {
      const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          height:'55rem',
          width:'70rem',
          zIndex:'300',
          backgroundColor:"#0B132B"
        }
      };
      
      return (
        <React.Fragment>
          <button className="showButton" id={this.props.busID} onClick={()=>this.handleOpenModal(this.props.busID, this.props.id)}>SHOW</button>
          <Modal 

             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             style={customStyles}
          >
            <button style={{float:"right"}} onClick={this.handleCloseModal}>X</button>
            <h2 style={{position:"relative",color:"white", zIndex:"1", textAlign:"center", margin:"1rem"}}>Anomaly Data</h2>
            
            <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column", zIndex:"2",height:"600px", width:"300px", border:"1px solid black", marginRight:"0.5rem"}}>
           <ModalData modalData={this.state.modalData} />
           <div style={{marginTop:"1rem"}}>
             <h4>More information about Anomaly</h4>
           </div>
            </div>
         <div style={{display:"flex", flexWrap:"wrap", alignContent:"space-between",justifyContent:"space-around", height:"50rem", width:"50rem"}}>
          <AnomalyGraph yData={this.state.Va} label="Voltage Angle" timeWindow={this.state.timeWindow}/>
          <AnomalyGraph yData={this.state.Vm} label="Voltage Magnitude" timeWindow={this.state.timeWindow} />
          <AnomalyGraph yData={this.state.Ca} label="Current Angle" timeWindow={this.state.timeWindow}/>
          <AnomalyGraph yData={this.state.Cm} label="Current Magnitude" timeWindow={this.state.timeWindow}/>
          <AnomalyGraph yData={this.state.F} label="Frequency" timeWindow={this.state.timeWindow}/>
          <AnomalyGraph yData={this.state.Rocof} label="Rate of Change of Frequency" timeWindow={this.state.timeWindow}/>
          
         </div>
         
        </div>
            
          </Modal>
        </React.Fragment>
      );
    }
  }
export default ExampleApp