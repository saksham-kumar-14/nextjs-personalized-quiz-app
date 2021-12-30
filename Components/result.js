import style from "../styles/result.module.css"; 

const Result = ({max_score, score, set_score, set_give_result}) => {

    return(
        <>
            <p id={style.result}>YOU SCORED : {score} / {max_score}</p>
            <button id={style.btn} onClick={()=>{
                set_give_result(false); 
                set_score(0); 
            }}>Reset</button>
        </>
    )
}

export default Result; 