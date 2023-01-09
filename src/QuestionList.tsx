import QuestionData from "./data/QuestionData";
import Question from "./Question";


function QuestionList({setResult}: {setResult: Function}) {
    return (
        <>
            <h1>Web Survey!</h1>
            {QuestionData.map((question) => <Question Question={question} setResult={setResult}></Question>)}
        </>
    )
}

export default QuestionList;