import React from "react";
import Home from "./components/Home";
import QuestionList from "./components/QuestionList";

export default function App() {

  const [start, setStart] = React.useState(false)

  function startQuiz() {
    setStart(true)
  }

  return (
    <div className=" relative overflow-hidden bg-gray ">
      <img src="./images/blob1.png" className="absolute -left-36 -bottom-36" />
      <img src="./images/blob2.png" className="absolute -right-36 -top-36" />
      
      {start ? <QuestionList /> : <Home startQuiz={startQuiz} />}
    </div>
  );
}
