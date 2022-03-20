
import React from "react"
import Question from "./Question"

export default function QuestionList() {

    const [questions, setQuestions] = React.useState([])

    const [submit, setSubmit] = React.useState(false)

    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!submit) {
            fetch('https://opentdb.com/api.php?amount=10')
                .then(response => response.json())
                .then(data => setQuestions(initAnswers(data)))
        }
    }, [submit])



    function initAnswers(data) {
        return data.results.map((quest) => {
            const { incorrect_answers, correct_answer, question } = quest
            let newArray = [...incorrect_answers]
            const index = Math.floor(Math.random() * incorrect_answers.length)
            newArray.splice(index, 0, correct_answer)

            let text = question.replace(/&quot;/g, '\"');
            text = text.replace(/&#039;/g,"\'");
            text = text.replace(/&amp;/g,"\'");

            return {
                ...quest,
                answers: newArray,
                selected: false,
                question: text
            }
        })
    }


    function handleChange(question, selected) {
        setQuestions((oldQuestions) => {
            return oldQuestions.map((q) => {
                if (q.question === question) return { ...q, selected: selected }
                else return q
            })
        })
    }

    const questionElement = questions.map((quest) => {
        //mix correct answer with incorrect answer
        const { question, answers, correct_answer, selected } = quest

        // let newArray = [...incorrect_answers]
        // const index = Math.floor(Math.random() * incorrect_answers.length)
        // newArray.splice(index,0,correct_answer)
        // console.log(newArray)

        return <Question
            question={question}
            // answers={newArray}
            answers={answers}
            correct={correct_answer}
            selected={selected}
            submit={submit}
            handleChange={handleChange}
        />
    })

    function handleSubmit() {
        let correct = 0
        questions.forEach((question) => {
            if (question.correct_answer === question.selected) correct++
        })
        setCount(correct)
        setSubmit(prevState => !prevState)
    }

    return (
        <div className="p-10 relatvie overflow-hidden flex flex-col h-full">
            {questionElement}
            <div className="flex justify-center">
                {submit && <div className="mt-5 w-40 self-center text-center">correct : {count}</div>}
                <button className="question-btn mt-5 w-40 self-center" onClick={handleSubmit}>{submit ? 'try again' : 'submit'}</button>
            </div>
        </div>
    )
}