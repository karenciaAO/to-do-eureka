import React, {useState, useEffect} from "react";

const Timer = () => {
    const[time, setTime] = useState(0)

    const[startTime, setStartTime] =useState(false)

    const[timerId, setTimerId] = useState(0)

    useEffect(()=>{
        let intervalId = null;
        if(startTime){
            intervalId = setInterval(() => {
                setTime (prev => prev +1);
            }, 1000);
            setTimerId(intervalId)
        }else{
            clearInterval(timerId)
        }


    }, [startTime])

    const resertear = () => {
        setTime(0)
    }


    return(
        <div>
            <br/>
            <div>segundos:{time}</div>
            <button onClick={() => setStartTime (true)}>play 🏂</button>
            <button onClick={()=>setStartTime(false)}>stop 🤚</button>
            <button onClick={resertear}>reiniciar🔁</button>

        </div>
    )
}

export default Timer;