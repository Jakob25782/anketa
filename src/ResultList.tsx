import { ResultType } from "./data/QuestionData";

function ResultList({resultData} : {resultData: ResultType[]}) {
    return (<pre>{JSON.stringify(resultData, null, 4)}</pre>)
}

export default ResultList;