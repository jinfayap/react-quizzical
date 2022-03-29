import React, { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => {
        let modifiedData = data["results"].map((question, index) => {
          return {
            id: index + 1,
            question: question["question"],
            correct_answer: question["correct_answer"],
            options: question["incorrect_answers"].concat(
              question["correct_answer"]
            ),
          };
        });

        setQuestions(modifiedData);
      });
  }, []);

  const questionElements = questions.map((question) => {
    return (
      <Question
        key={question.id}
        question={question.question}
        options={question.options}
        correct_answer={question.correct_answer}
      />
    );
  });

  return (
    <div className="container">
      {questionElements}

      <div className="Outcome">
        <button className="Outcome__button">Check answers</button>
      </div>
    </div>
  );
};

export default Quiz;
