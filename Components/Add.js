import React, { useState } from "react";
import style from "../styles/add.module.css";

const Add = ({all_questions, set_all_questions}) => {
    const [current_question, set_current_question] = useState(""); 
    const [current_answer, set_current_answer] = useState("");

    function add_question(e){
        e.preventDefault(); 
        set_all_questions([
            ... all_questions, 
            {"question" : current_question, "answer":current_answer}
        ]) 
    }

    return(
        <>
            <form id={style.form}>
                <label>New Question</label>
                <input onChange={(e)=>{
                    set_current_question(e.target.value)
                }}></input>
                <label>New Answer</label>
                <input onChange={(e)=>{
                    set_current_answer(e.target.value)
                }}></input>
                <button onClick={add_question}>Submit</button>
            </form>

        </>
    )
}

export default Add; 