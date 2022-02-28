import { useState } from "react";

const Session = (props) => {
    const {incre,decre,length}=props;
    return (
        <div className='containerButton'>
            <p>Session</p>
            <button onClick={decre}>
              <i className='bi bi-dash'></i>
            </button>

            <span id="session-length">{length / 60}</span>

            <button onClick={incre}>
                <i className='bi bi-plus'></i>
            </button>
        </div>
    )
}
export default Session