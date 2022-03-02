import React, { useEffect, useState } from 'react'
import Break from '../components/Break'
import { ClockCounter } from '../components/ClockCounter';
import Session from '../components/Session'

export const Timer = () => {
    const [sessionLength, setSessionLength] = useState(25 * 60);
    const [breakLength, setBreakLength] = useState(5 * 60);
    const [mode, setMode] = useState("session");
    const [timeLess, setTimeLess] = useState();
    const [isActive, setIsActive] = useState(false);
    const [timeSpent, setTimeSpent] = useState(0);
    const [beep] = useState(
    new Audio("https://freesound.org/data/previews/523/523960_350703-lq.mp3"));
    const [playing, setPlaying] = useState(false);

    const decrementS=()=>{
        const decre = sessionLength - 60 > 60 ? sessionLength - 60 : 60;
        setSessionLength(decre);
    }

    const incrementS=()=> {
        const incre = sessionLength + 60 <= 60 * 60 ? sessionLength + 60 : 60 * 60;
        setSessionLength(incre);
    }
    
    const decrementB=()=>{
        const decre = breakLength-60>60? breakLength - 60:60
        setBreakLength(decre)
    }
    const incrementB=()=>{
        const incre = breakLength +60 <=60*60? breakLength+60: 60*60;
        setBreakLength(incre)
    }
    useEffect(()=>{
        setTimeLess(mode=="sesson"? sessionLength*1000: breakLength*1000)
    },[sessionLength,breakLength])
    useEffect(()=>{
        let interval = null
        if(isActive&&timeLess>1){
        setTimeLess(
            mode=="session"?
            sessionLength*1000 - timeSpent
            :breakLength * 1000 -timeSpent
        );
        interval =setInterval(()=>{setTimeSpent((timeSpent)=>timeSpent+1000)},1000)
        }else{clearInterval(interval)} 
        if (timeLess === 0) {
        beep.play();
        setPlaying(true);
        setTimeSpent(0);
        setMode((mode) => (mode == "session" ? "session"  : "break"));
        setTimeLess(
            mode == "session" ? sessionLength * 1000 : breakLength * 1000
        );
        }
        return () => clearInterval(interval);
    },[isActive,timeSpent])
    
  useEffect(() => {
    beep.addEventListener("ended", () => setPlaying(false));
    return () => {
      beep.addEventListener("ended", () => setPlaying(false));
    };
  }, []);

  const reset=()=>{
      setBreakLength(5*60);
      setSessionLength(25*60)
      setTimeLess(mode=="session"? sessionLength*1000: breakLength*1000)
      setMode("session")

      if(isActive){
          setIsActive(false);
          setTimeSpent(0);
      }
      if(playing){
          beep.pause();
          beep.currentTime =0
          setPlaying(false)
      }
  }
  const timeActive=()=>{
      setIsActive(!isActive)
  }

  const timeStop=()=>{
      setIsActive(false)
  }
      
  return (
    <div>
        <div className='containerButton'>
            <Break
            length={breakLength}
            decre={decrementB}
            incre={incrementB}/>
            <Session
            length={sessionLength}
            decre={decrementS}
            incre={incrementS}/>
           
        </div>
         <ClockCounter time={timeLess} mode={mode}/>
        <div className='containerButton'>
            <button onClick={timeActive}  id="start_stop" >
               <i className="bi bi-play-circle"></i>
            </button>
            <button onClick={timeStop} id="time-left" >
                <i className="bi bi-pause-btn"></i>
            </button >
            <button onClick={reset}  id="reset" >
                <i className="bi bi-arrow-clockwise"></i>
            </button>
        </div>
    </div>
  )
}
