import * as React from 'react';
import { InputField, SelectField } from '@fluentui/react-components/unstable';
import { QuestionType, RenderType, ResultType, ResultAnswerType } from './data/QuestionData';
import {  Checkbox, CheckboxOnChangeData, Radio, Slider } from '@fluentui/react-components';
//
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'

type themeMode = 'day' | 'night'

function Question({ Question, setResult }: { Question: QuestionType, setResult: Function }) {

    const handleInputSelect = (event: React.ChangeEvent<HTMLInputElement>) => {

        setResult((prev: [ResultType]) => {
            prev[Question.id - 1] = { id: Question.id, question: Question.question, answer: event.target.value };
            return [...prev];
        })
    };

    //DARK MODE
    const [modeState, setModeState] = useState<themeMode>('day')

    useEffect(() => {
        const localTheme: string = localStorage.getItem('react-theme') || 'day'
        setMode(localTheme as themeMode)
    }, [])

    const setMode = (mode: themeMode) => {
        localStorage.setItem('react-theme', mode)
        setModeState(mode)
    }

    const toggleTheme = () => {
        modeState === 'night' ? setMode('day') : setMode('night')
    }
    //DARK MODE

    const [value, setValue] = React.useState<Dayjs | null>(null);

    const handleSelectInput = (event: React.ChangeEvent<HTMLSelectElement>) => {

        setResult((prev: [ResultType]) =>{
            prev[Question.id - 1] = { id: Question.id, question: Question.question, answer: event.target.value};
            return [...prev];
        })

    }
    
    function calcAnswers(oldAnswers: ResultAnswerType, newAnswer: string, adding:boolean): ResultAnswerType
    {
        const isStringArray = (x: any): x is string[] => true;
        const elementExists = (stringArray: string[], element: string): boolean => stringArray.indexOf(element) !== -1
            
        if (isStringArray(oldAnswers))
        {    
            if (adding)
            {
                if (!elementExists(oldAnswers, newAnswer))
                    oldAnswers.push(newAnswer);
            } else {
                if (elementExists(oldAnswers, newAnswer))
                    oldAnswers.splice(oldAnswers.indexOf(newAnswer), 1);
            }
        }
        return oldAnswers;
    }    

    const handleCheckBox = (ev: React.ChangeEvent<HTMLInputElement>, data: CheckboxOnChangeData) : void => {
        
        setResult((prev: [ResultType]) => {
            var answers: ResultAnswerType = prev[Question.id - 1] ? prev[Question.id - 1].answer : []; 
            answers = calcAnswers(answers, ev.target.defaultValue, data.checked as boolean)
            console.log(ev.target.defaultValue, data.checked, answers);
            prev[Question.id - 1] = { id: Question.id, question: Question.question, answer: answers} ;
            return [...prev];
        })
    }

    return (
        <>
            <h2>{Question.question}</h2>
            
            {Question.renderType === RenderType.choice &&
                <ol>
                    {Question.answers.map((item) => {
                        return <li><Radio type='radio' name={`${Question.id}`} value={`${item.answer}`} onChange={handleInputSelect}></Radio><label>{item.answer}</label></li>
                    }
                    )}
                </ol>}
            {Question.renderType === RenderType.text &&
                <InputField appearance="underline" validationMessage="Izpolnite zgornje polje" validationState="warning" name={`${Question.id}`} onChange={handleInputSelect}></InputField>
                }
            {Question.renderType === RenderType.rating &&
                <ol>
                    {Question.answers.map((item) => {
                        return <li><Slider min={0} max={5}  type='radio' defaultValue={2} name={`${Question.id}`} onChange={handleInputSelect}></Slider><label>{item.answer}</label></li>
                    }
                    )}
                </ol>}
            {Question.renderType === RenderType.check &&
                <ol> 
                    {Question.answers.map((item) => {
                        return <li><Checkbox  type='checkbox' name={`${Question.id}`} value={`${item.answer}`} onChange={handleCheckBox}></Checkbox><label>{item.answer}</label></li>
                    }
                    )}
                </ol>}
            {Question.renderType === RenderType.search &&
                <ol> 
                    {Question.answers.map((item) => {
                        return <li><SelectField defaultValue="Green" onChange={handleSelectInput}> <option>Red</option> <option>Green</option><option>Blue</option>
                        </SelectField><label>{item.answer}</label></li>
                    }
                    )}
                </ol>}
            {Question.renderType === RenderType.checkbox &&
                <ol> 
                    {Question.answers.map((item) => {
                        return <li><Checkbox  type='checkbox' name={`${Question.id}`} value={`${item.answer}`} onChange={handleCheckBox}></Checkbox><label>{item.answer}</label></li>
                    }
                    )}
                </ol>}
            {Question.renderType === RenderType.calendar &&
                <> 
                    {Question.answers.map((item) => {
                        return	<>
                            <LocalizationProvider color="success" dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Enter name"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider><label>{item.answer}</label></>
                    })}
                </>}
            {Question.renderType === RenderType.darkmode &&
                <ol> 
                    {Question.answers.map((item) => {
                        return <>
                            <ThemeProvider theme={theme[modeState]}>
                                <GlobalStyle />
                                <h1>{modeState === 'night' ? 'DARK' : 'LIGHT'}</h1>
                                <button onClick={toggleTheme}>Toggle Theme</button>
                            </ThemeProvider><label>{item.answer}</label>
                        </>
                    }
                    )}
                </ol>}
            </>
    );
}
export default Question;