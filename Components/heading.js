import React , { useState } from "react";
import style from "../styles/heading.module.css"; 

const Heading = ({set_heading}) => {
    const [new_heading, set_new_heading] = useState("Testing"); 
    
    return ( 
        <div id={style.main_div}>
            <label>Enter new heading ... </label>
            <input id={style.input} onChange={(e)=>{
                set_new_heading(e.target.value)
            }} ></input>
            <button id={style.btn} onClick={()=>{
                set_heading(new_heading)
            }}>Submit</button>
        </div> 
    )
}

export default Heading; 