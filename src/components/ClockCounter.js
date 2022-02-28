import React from 'react'

export const ClockCounter = (props) => {
    
        const {time, mode}=props;
        const min = Math.floor(time/1000/60)
        const sec = Math.floor((time / 1000) % 60);
  return (
    
    <div>
        <p timer-label>{mode}</p>
        <p>
        {min}:{sec.toString().length ===1? "0"+ sec:sec}
        </p>
    </div>
   
  )
}

