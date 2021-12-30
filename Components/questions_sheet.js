import React , { useState } from "react";
import Result from "./result";
import style from "../styles/question_sheet.module.css"; 

const Questions_Sheet = ({questions, answers, set_answers}) => {
    const [give_result, set_give_result] = useState(false); 
    const [score, set_score] = useState(0); 

    return(
        <>
            {give_result===false &&
            <div id={style.main_div}>
                {questions.map((e, index)=>{
                    return(
                        <div id={style.question}>
                            <p> {index+1}.  {e.question}</p>
                            <input onChange={(e)=>{
                                answers[index] = e.target.value;
                                set_answers(answers); 
                            }}></input>
                        </div>
                    )
                })}

                <button id={style.btn} onClick={()=>{
                    set_give_result(true);
                    for(let i=0;i<questions.length;i++){ 
                        if(questions[i].answer.toLowerCase() === answers[i].toLowerCase()){
                            set_score(score+1); 
                        }
                    } 
                }}>Submit</button>
            </div> }
            

            {give_result && <Result max_score={questions.length} score={score} set_score={set_score} set_give_result={set_give_result} />}
        </>
    )
}

export default Questions_Sheet; 