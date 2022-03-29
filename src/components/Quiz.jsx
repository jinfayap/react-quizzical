import React, { useEffect, useState } from "react";
import Question from "./Question";
import _ from "lodash";

const Quiz = () => {
  const [start, setStart] = useState(false);

  const [questions, setQuestions] = useState([]);

  const [submit, setSubmit] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;

    let isCompleted = questions.every((question) => {
      return question.selected !== null;
    });

    setCompleted(isCompleted);
  }, [questions]);

  const checkAnswer = () => {
    setSubmit(true);
    let numCorrectAnswer = questions.filter(
      (question) => question.isCorrect
    ).length;
    let response = `You scored ${numCorrectAnswer}/${questions.length} answers`;
    setResponse(response);
  };

  const questionElements = questions.map((question) => {
    return (
      <Question
        key={question.id}
        question={question}
        setQuestions={setQuestions}
        submit={submit}
      />
    );
  });

  const restartQuiz = () => {
    setQuestions([]);
    setCompleted(false);
    setResponse("");
    setSubmit(false);
    fetchQuestions();
  };

  const fetchQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=3")
      .then((res) => res.json())
      .then((data) => {
        let modifiedData = data["results"].map((question, index) => {
          return {
            id: index + 1,
            question: question["question"],
            correct_answer: question["correct_answer"],
            options: _.shuffle(
              question["incorrect_answers"].concat(question["correct_answer"])
            ),
            selected: null,
            isCorrect: false,
          };
        });

        setQuestions(modifiedData);
      });
  };

  return (
    <div>
      {start ? (
        <div className="container">
          {questionElements}

          <div className="Outcome">
            {completed && !submit && (
              <button className="Outcome__button" onClick={checkAnswer}>
                Check answers
              </button>
            )}

            {completed && submit && (
              <div className="Outcome__playAgain">
                <h4>{response}</h4>
                <button className="Outcome__button" onClick={restartQuiz}>
                  Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="Start__container">
          <div>
            <h2 className="Start__title">Quizzical</h2>
            <p className="Start__description">Some description if needed</p>
            <button className="Start__button" onClick={() => setStart(true)}>
              Start quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
