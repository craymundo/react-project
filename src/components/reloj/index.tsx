import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
    let myInterval = setInterval(() => {
           setTime(new Date())
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
    <span>{time.toLocaleTimeString()}{time.getHours() >= 12 ? "PM." : "AM."}</span>
    
    )
}

export default Timer;