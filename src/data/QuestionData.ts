export enum RenderType {
    choice,
    text,
    rating,
    check,
    search,
    button, 
    checkbox,
    calendar,
    darkmode
}

export type AnswerType = {
    answer: string | number | boolean,
}

export type QuestionType = {
    id: number,
    question: string,
    renderType: RenderType,
    answers: AnswerType[],
};

export type ResultAnswerType = string | number | boolean | string[];

export type ResultType = {
    id:number,
    question: string | boolean,
    answer: ResultAnswerType,
}

const QuestionData : QuestionType[] = [
    {
        id: 1,
        question: 'What is the weather right now?',
        renderType: RenderType.choice,
        answers: [
            {answer: 'Sunny'},
            {answer: 'Shower'},
            {answer: 'Stormy'},
            {answer: 'Snowy'},
        ]
    },
    {
        id: 2,
        question: 'Kaj si želite početi v življenju?',
        renderType: RenderType.text,
        answers:[
            {answer: ''},
        ]
    },
    {
        id: 3,
        question: 'Ocenite vaše počutje od 1 do 5.',
        renderType: RenderType.rating,
        answers:  [
            {answer: "5."},
            
        ]
    },
    {
        id: 4,
        question: 'Kako bi opisal okolje v katerem živiš?',
        renderType: RenderType.choice,
        answers: [
            {answer: 'Mesto'},
            {answer: 'Primestno okolje'},
            {answer: 'Vas'},
        ]
    },
    {
        id: 5,
        question: 'What is the weather right now?',
        renderType: RenderType.check,
        answers: [
            {answer: 'Sunny'},
            {answer: 'Shower'},
            {answer: 'Stormy'},
        ]
    },
    {
        id: 6,
        question: 'Izberite eno izmed naslednjih barv',
        renderType: RenderType.search,
        answers: [
            {answer: ''},
        ]
    }, 
    {
        id: 7,
        question: 'What is the weather right now?',
        renderType: RenderType.checkbox,
        answers: [
            {answer: 'Sunny'},
            {answer: 'Shower'},
            {answer: 'Stormy'},
        ]
    },
    {
        id: 8,
        question: 'What is the weather right now?',
        renderType: RenderType.calendar,
        answers: [
            {answer: ''},
        ]
    },
    {
        id: 9,
        question: 'What is the weather right now?',
        renderType: RenderType.darkmode,
        answers: [
            {answer: ''},
        ]
    },

    
];



export const ResultData: ResultType[] = [];

export default QuestionData;


