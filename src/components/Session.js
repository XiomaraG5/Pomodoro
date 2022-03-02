import { useState } from "react";

const Session = (props) => {
    const {incre,decre,length}=props;
    return (
        <div className='containerButton session'>
            <p id="session-label">Session</p>
            <button onClick={decre}  id="session-decrement">
              <i className='bi bi-dash'></i>
            </button>

            <span id="session-length">{length / 60}</span>

            <button onClick={incre} id="session-increment">
                <i className='bi bi-plus'></i>
            </button>
        </div>
    )
}
export default Session