import React from 'react'

export const ClockCounter = (props) => {
    
        const {time, mode}=props;
        const min = Math.floor(time/1000/60)
        const sec = Math.floor((time / 1000) % 60);
  return (
    
    <div className='ClockCounter' >
        <p id="timer-label">{mode}</p>
        <p className='timer-label' >
        {min}:{sec.toString().length ===1? "0"+ sec:sec}
        </p>
    </div>
   
  )
}

