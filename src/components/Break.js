import { useState } from "react";

const Break = (props) => {
    
    const {incre,decre,length}=props;
    return (
        <div className='containerButton'>
            <p>Break</p>
            <button onClick={decre} >
                <i className='bi bi-dash'></i>
            </button>
            <span id="break-length">{length / 60}</span>
            <button onClick={incre} >
                <i className='bi bi-plus'></i>
            </button>
            <audio id="beep" />
        </div>
    )
}
export default Break