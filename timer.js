import React from 'react';
import './timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props) 
    this.state={
      hours: 0,
      minutes: 0,
      seconds: 0,
      time: 0,
      isOn:false
    }
    setInterval(
      () => {
        if (this.state.isOn === true) {
          
        this.setState({
          time: this.state.time +1,
          hours: Math.floor(this.state.time / 3600),
          minutes: Math.floor(this.state.time%3600 / 60),
          seconds: Math.floor((this.state.time%3600)%60),   
        })
      }
     
      },
      1000
    )
    
  }

  startfun=()=>{
    this.setState({
      isOn: !this.state.isOn
    })
  }

  resetfun=()=>{
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      time: 0,
      isOn:false
    })
  }


  render(){
    return (
      <div className="myscreen">
      <div className="mytimer">
        <div className="actualtime">
     {this.state.hours < 10 ? String(this.state.hours).padStart(2, '0') : String(this.state.hours)} : {this.state.minutes < 10 ? String(this.state.minutes).padStart(2, '0') : String(this.state.minutes)} : {this.state.seconds < 10 ? String(this.state.seconds).padStart(2, '0') : String(this.state.seconds)}
          
        </div>
        <div className="timename">
           <div className="time-text-item">Hour</div>
           <div className="time-text-item">Minute</div>
           <div className="time-text-item">Second</div>
        </div>
      <div className="buttons">
        <button className="startbutton" onClick={this.startfun}>{this.state.isOn===false ? "Start" : "Stop"}</button>
        <button className="resetbutton" onClick={this.resetfun}>Reset</button>
      </div>
     </div>
    </div>
     
    )
  }
}


export default Timer;