import React from "react";

const Question = ({ question, setQuestions }) => {
  const selectAsAnswer = (id, option) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, selected: option };
        }
        return question;
      });
    });
  };

  const optionElement = question.options.map((option) => {
    return (
      <span
        key={option}
        className={question.selected === option ? "selected" : ""}
        onClick={() => selectAsAnswer(question.id, option)}
      >
        {option}
      </span>
    );
  });
  return (
    <div className="Question">
      <h3 className="Question__title">{question.question}</h3>
      <div className="Question__options">{optionElement}</div>
    </div>
  );
};

export default Question;
