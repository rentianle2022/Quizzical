import React from "react"

export default function Question(props) {
    // const [answer, setAnswer] = React.useState(() => {
    //     let newArray = [...props.incorrect_answers]
    //     const index = Math.floor(Math.random() * props.incorrect_answers.length)
    //     newArray.splice(index, 0, props.correct)
    //     return newArray
    // });

    // React.useEffect(() => {
    //     if (!props.submit) {
    //         console.log("reset!")
    //         let newArray = [...props.incorrect_answers]
    //         const index = Math.floor(Math.random() * props.incorrect_answers.length)
    //         newArray.splice(index, 0, props.correct)
    //         setAnswer(newArray)
    //     }
    // }, [props.submit])

    function changeAnswer(event) {
        console.log(event.target.name)
        props.handleChange(props.question, event.target.value)
    }

    const answerElement = props.answers.map((ans) => {

        let bgColor
        if (!props.submit) {
            if (props.selected === ans) bgColor = 'bg-purple'
        } else {
            if (props.selected === ans && props.correct != ans) bgColor = 'bg-red'
            if (props.correct === ans) bgColor = 'bg-green'
        }



        return <div>
            <input
                type="radio"
                id={ans + props.question}
                name={props.id}
                value={ans}
                checked={props.selected === ans}
                onChange={changeAnswer}
                disabled={props.submit ? 'disabled' : ''}
            />
            <label
                htmlFor={ans + props.question}
                className={`question-btn ${bgColor} `}
            >{ans}
            </label>

        </div>
    })

    return (
        <div className="flex flex-col p-4 gap-5">
            <h1 className="font-semibold text-xl text-deep-blue">{props.question}</h1>
            <div className="flex gap-4 justify-start ">
                {answerElement}
            </div>
            <hr className="border-t-[purple] " />
        </div>
    )
}