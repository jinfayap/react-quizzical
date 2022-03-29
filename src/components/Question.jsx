import React from "react";
import DomPurify from "dompurify";

const Question = ({ question, setQuestions, submit }) => {
  const selectAsAnswer = (id, option) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return {
            ...question,
            selected: option,
            isCorrect: option === question.correct_answer,
          };
        }
        return question;
      });
    });
  };

  const optionElement = question.options.map((option) => {
    return (
      <span
        key={option}
        className={
          !submit
            ? question.selected === option
              ? "selected"
              : ""
            : option === question.correct_answer
            ? "correct"
            : "incorrect"
        }
        onClick={() => selectAsAnswer(question.id, option)}
        dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(option) }}
      ></span>
    );
  });
  return (
    <div className="Question">
      <h3
        className="Question__title"
        dangerouslySetInnerHTML={{
          __html: DomPurify.sanitize(question.question),
        }}
      ></h3>

      <div className="Question__options">{optionElement}</div>
      {submit && (
        <p>
          You selected <strong>{question.selected}</strong>
        </p>
      )}
    </div>
  );
};

export default Question;
