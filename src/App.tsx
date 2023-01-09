import React, { useState } from "react";
import './Style/App.css'
import { ResultData  } from "./data/QuestionData";
import QuestionList from "./QuestionList";
import ResultList from './ResultList';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';

function App() {
  const [result, setResult] = useState(ResultData);

  return (
    <div className="App">
      <FluentProvider theme={teamsDarkTheme}>
        <QuestionList setResult={setResult} />
        <ResultList resultData={result} />
      </FluentProvider>
    </div>
  );
}

export default App;