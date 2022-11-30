import React, { useState } from "react";
import "./App.css";
import useTimeout from "./stTimeOut";

function App() {
  useTimeout(() => alert("Time Out"), 120000);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // async function getQuiz() {
  //   await axios
  //     .get(
  //       "https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple",
  //       {}
  //     )
  //     .then((res) => {
  //       const data = res.data.results.gps_summary;
  //       set([...data]);
  //       console.log(res.data.results.gps_summary);
  //       console.log("sasafsafsafsa");

  //       setStateProduct({
  //         totalProduct: res.data.totalProduct,
  //         offset: res.data.results.offset,
  //       });
  //     });

  // useEffect(() => {
  //   getQuiz();
  // }, []);
  const questions = [
    {
      text: "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
      options: [
        { id: 0, text: "Z boson", isCorrect: false },
        { id: 1, text: "Tau neutrino", isCorrect: false },
        { id: 2, text: "Gluon", isCorrect: false },
        { id: 3, text: "Graviton", isCorrect: true },
      ],
    },
    {
      text: "Which scientific unit is named after an Italian nobleman?",
      options: [
        { id: 0, text: "Volt", isCorrect: true },
        { id: 1, text: "pascal", isCorrect: false },
        { id: 2, text: "ohm", isCorrect: false },
        { id: 3, text: "hertz", isCorrect: false },
      ],
    },
    {
      text: "The word &quot;science&quot; stems from the word &quot;scire&quot; meaning what?",
      options: [
        { id: 0, text: "To know", isCorrect: true },
        { id: 1, text: "To measure", isCorrect: false },
        { id: 2, text: "To live", isCorrect: false },
        { id: 3, text: "To count", isCorrect: false },
      ],
    },
    {
      text: "How long is a light-year?",
      options: [
        { id: 0, text: "1 AU", isCorrect: false },
        { id: 1, text: "9.461 Trillion Kilometres", isCorrect: true },
        { id: 2, text: "105.40 Earth-years", isCorrect: false },
        { id: 3, text: "501.2 Million Miles", isCorrect: false },
      ],
    },
    {
      text: "Burning which of these metals will produce a bright white flame?",
      options: [
        { id: 0, text: "Lithium", isCorrect: false },
        { id: 1, text: "Magnesium", isCorrect: true },
        { id: 2, text: "copper", isCorrect: true },
        { id: 3, text: "lead", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Science & Nature</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
