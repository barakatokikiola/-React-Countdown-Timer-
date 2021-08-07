import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const Timer = (props) => {
  const [days, setDays]=useState(0)
  const [hours, setHours]=useState(0)
  const [minutes, setMinutes]=useState(0)
  const [seconds, setSeconds]=useState(0)
  
   const countdown = () => {
     const dateCounter = new Date('September 1,2021 00:00:00').getTime();
     const now = new Date().getTime();
     const gap = dateCounter - now;
  
     const seconds = 1000
     const minutes = seconds * 60
     const hours = minutes * 60
     const days = hours * 24
     
      let textDay = Math.floor(gap / days);
      let textHour = Math.floor((gap % days) / hours);
      let textMinute = Math.floor((gap % hours) / minutes);
      let textSecond = Math.floor((gap % minutes) / seconds);
     
      setDays(textDay);
      setHours(textHour);
      setMinutes(textMinute);
      setSeconds(textSecond);
      };
      
      useEffect(()=>{
        setInterval(countdown,1000)
      })
      
  return(
      <section id = 'container'>
      <h1>Launching in...</h1>
            <div id = 'countdown'>
      
       <div> 
       <p>{days}</p>
       <h4>Days</h4>
       </div>
        <div > 
              <p>{hours}</p>
              <h4>Hours</h4>
              </div>
               <div> 
                     <p>{minutes}</p>
                     <h4>Minutes</h4>
                     </div>
                      <div> 
                            <p>{seconds}</p>
                          <h4>Seconds</h4>
       </div>
       </div>
       <div id='reminder'>
       <input type='text' id ='notify'/>
       
       <input type='button' id='btn' value='Notify me'/>
      </div>
      </section>
      );
  
}

export default Timer;