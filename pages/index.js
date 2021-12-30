import Greeting from "../Components/greeting"; 
import style from "../styles/Home.module.css"; 
import React, { useState } from "react";
import Questions from "../api/questions";
import Add from "../Components/Add";
import Test from "../Components/Test";
import View from "../Components/view";
import Heading from "../Components/heading";

const Home = () =>{
  const [all_questions, set_all_questions] = useState(Questions);
  const [current_state, set_current_state] = useState(""); 
  const [heading, set_heading] = useState("Testing"); 

  return(
    <>
    <div id={style.heading_div}>
      <h1 id={style.heading}> {heading} </h1>
    </div>
    <Greeting /> 
    <div id={style.main_div}>

      <div className={style.main_sub_div} id={style.main_sub_div_1}>
        Features
      </div>

      <div className={style.main_sub_div}> 
          <button onClick={()=>{
            set_current_state("add")
          }} className={style.nav_btns}>Add Question</button>  
          <button onClick={()=>{
            set_current_state("test")
          }} className={style.nav_btns}>Give Test</button> 
          <button onClick={()=>{
            set_current_state("view")
          }} className={style.nav_btns}>View Questions</button>
          <button onClick={()=>{
            set_current_state("heading")
          }} className={style.nav_btns}>Set Heading</button>
      </div>

      {current_state==="add"  && <Add all_questions={all_questions} set_all_questions={set_all_questions}/>}
      {current_state==="test"  && <Test all_questions={all_questions} set_all_questions={set_all_questions}/>}
      {current_state==="view" && <View all_questions={all_questions} set_all_questions={set_all_questions}/>}
      {current_state==="heading" && <Heading set_heading={set_heading} />}

    </div>
    </>
  )
}

export default Home; 