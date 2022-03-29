import React from "react";

const Question = ({ question, options, correct_answer }) => {
  const optionElement = options.map((option) => {
    return <span key={option}>{option}</span>;
  });
  return (
    <div className="Question">
      <h3 className="Question__title">{question}</h3>
      <div className="Question__options">{optionElement}</div>
    </div>
  );
};

export default Question;
