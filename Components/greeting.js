import React, { useEffect, useState } from "react"
import style from "../styles/greeting.module.css"; 

const Greeting = () => {
    const [greet,set_greet] = useState("");  

    useEffect(()=>{
        const day = new Date();
        const hours = day.getHours(); 
        if(hours>4 && hours<12){ set_greet("Good Morning ... ") }
        else if(hours>11 && hours<17){ set_greet("Good Afternoon ... ") }
        else if(hours>16 && hours<20){ set_greet("Good Evening ... ") }
        else { set_greet("Good Night ... ") }
    },[])

    return(
        <div id={style.main_div}>
            <span id={style.greeting}>{greet}</span> 

            <style jsx>{`
                div{
                    background-color : ${(greet === "Good Morning ..." || greet === "Good Afternoon ... ") ? "orange" : "rgb(220,220,220)"}
                }
            `}</style>
        </div>
    )
}

export default Greeting; 