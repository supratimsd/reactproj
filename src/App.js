// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
 

function App() {
  let time=new Date().toLocaleTimeString();
  const [ctime,setcTime]= useState(time);
  const updateTime = ()=>{
    let time=new Date().toLocaleTimeString();
    setcTime(time);
    
  }
  setInterval(updateTime,1000);
  return (
    <div class="container">
      <div>
      {ctime}
      </div>
    </div>
  );
}

export default App;
