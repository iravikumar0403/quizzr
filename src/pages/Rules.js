import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export const Rules = () => {
  const { state } = useLocation();
  const next = state?.next;
  const { dispatch } = useQuiz();
  useEffect(() => {
    dispatch({
      type: "CLEAR",
    });
  });
  return (
    <main className="container">
      <div className="content-center">
        <h2 className="text-primary my-2">Quizzr Rules</h2>
        <p className="fs-1">
          &#8594; Each question will have 4 options with 1 correct answer
        </p>
        <p className="fs-1">&#8594; Each question has a timer of 30 seconds</p>
        <p className="fs-1">
          &#8594; For every right answer you will get 10 points
        </p>
        <p className="fs-1">&#8594; No negative marking for wrong answers</p>
        <Link to={next || "/quizzes"} className="btn primary my-4">
          Continue
        </Link>
      </div>
    </main>
  );
};
