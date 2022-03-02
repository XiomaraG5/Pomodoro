import { useState } from "react";

const Break = (props) => {
    
    const {incre,decre,length}=props;
    return (
        <div className='containerButton session'>
            <p id="break-label">Break</p>
            <button onClick={decre} id="break-decrement" >
                <i className='bi bi-dash'></i>
            </button>
            <span id="break-length">{length / 60}</span>
            <button onClick={incre} id="break-increment"  >
                <i className='bi bi-plus'></i>
            </button>
            <audio id="beep" />
        </div>
    )
}
export default Break