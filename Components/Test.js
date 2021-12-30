import React, { useState } from "react";
import Questions_Sheet from "./questions_sheet"; 
import style from "../styles/test.module.css"; 

const Test = ({all_questions}) => {
    // at max only 10 questions would be selected  .... 
    const [questions, set_questions] = useState([]);
    const temp = [];
    for(let i=0;i<10;i++){temp.push("")} 
    const [answers, set_answers] = useState(temp);  

    return(
        <div id={style.main_div}>
            <button id={style.btn} onClick={()=>{
                set_questions(all_questions.slice(Math.random()*(all_questions.length-2) , 10))  
            }}>Select Questions</button>

            {questions.length!=0 && <Questions_Sheet questions={questions} answers={answers} set_answers={set_answers} />}
            
        </div>
    )
}

export default Test; 
