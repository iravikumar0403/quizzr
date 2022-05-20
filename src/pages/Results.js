import { Navigate } from "react-router-dom";
import { Loader } from "../components";
import { useQuiz } from "../context/QuizContext";
import { useQuestion } from "../hooks";

export const Results = () => {
  const { quiz_id, answers } = useQuiz();
  const { loading, data } = useQuestion(quiz_id);

  if (!quiz_id) return <Navigate to="/quizzes" replace />;
  if (loading) return <Loader />;

  const getClassName = (option, question_id) => {
    if (option.id === answers[question_id]) {
      if (option.is_correct) {
        return "success";
      } else {
        return "danger";
      }
    }
    return option.is_correct ? "success" : "primary";
  };

  const calcScore = (data, answers) => {
    let score = 0;
    score = data.reduce(
      (acc, curr) =>
        curr.options.find((opt) => opt.id === answers[curr.id])?.is_correct
          ? acc + 10
          : acc,
      score
    );
    return score;
  };

  return (
    <main>
      <p className="text-center fs-3 my-5">
        Final Score : {calcScore(data, answers)}/{data.length * 10}
      </p>
      <div className="container">
        {data.map((question, index) => (
          <div className="my-2" key={question.id}>
            <p>
              Question: {index + 1}/{data.length}
            </p>
            <p className="text-center fs-1 my-2">{question.question}</p>
            <div className="options-container">
              {question.options.map((option) => (
                <button
                  className={`btn ${getClassName(option, question.id)}`}
                  key={option.id}
                >
                  {option.option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
