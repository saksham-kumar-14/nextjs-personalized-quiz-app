import style from "../styles/view.module.css";

const View = ({all_questions,set_all_questions}) => {

    return(
        <>
            <div id={style.main_div}>
                <h2 id={style.heading}>Questions which would be used in the test are - </h2>
                {all_questions.map((e,index)=>{
                    return(
                        <div className={style.sub_div}>
                            <span>{index+1}.</span>
                            <div className={style.sub_sub_div}>
                                <span className={style.question}>QUESTION : 
                                <span className={style.sub_question}> {e.question}</span>
                                </span>
                                <span className={style.answer}>ANSWER : 
                                <span className={style.sub_answer}> {e.answer}</span>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button id={style.clear_all_btn} onClick={()=>{
                set_all_questions([]); 
            }}>Delete all questions!</button>
        </>
    )
}

export default View; 