import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const currentTime = new Date().getTime();
  const targetTime = new Date(new Date().getFullYear(), 11, 24, 0, 0, 0, 0).getTime();
  const [leftTime, setLeftTime] = useState(new Date(targetTime - currentTime).getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime(leftTime => leftTime - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='Container'>
      <h1>Christmas eve countdown </h1>
      <div className='DateBlock'>
        <div className='DateElementValue'>{new Date(leftTime).getMonth()}
          <p className='DateElementDesc'>Months</p>
          </div>
        <div className='DateElementValue'>{new Date(leftTime).getDate()}
          <p className='DateElementDesc'>Days</p>
          </div>
        <div className='DateElementValue'>{new Date(leftTime).getHours()}
          <p className='DateElementDesc'>Hours</p>
          </div>
        <div className='DateElementValue'>{new Date(leftTime).getMinutes()}
          <p className='DateElementDesc'>Minutes</p>
          </div>
        <div className='DateElementValue'>{new Date(leftTime).getSeconds()}
          <p className='DateElementDesc'>Seconds</p>
          </div>
      </div>
    </div>
  );
}

export default App;
