import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuestion } from "../hooks";
import { Loader } from "../components";
import { useQuiz } from "../context/QuizContext";

export const Quiz = () => {
  const { id } = useParams();
  const { loading, data } = useQuestion(id);
  const { questionIndex, dispatch } = useQuiz();
  const navigate = useNavigate();

  const handleOptionClick = (selectedAnswer, question) => {
    dispatch({
      type: "ANSWER",
      payload: {
        quiz_id: id,
        question_id: question.id,
        selectedAnswer: selectedAnswer.id,
      },
    });

    if (questionIndex + 1 !== data.length) {
      dispatch({
        type: "NEXT",
      });
    } else {
      navigate("/results", { replace: true });
    }
  };

  if (loading) return <Loader />;

  return (
    <main>
      <div className="container">
        <div className="flex-space-between">
          <p>
            Question: {questionIndex + 1}/{data.length}
          </p>
          <p>Time: 30</p>
        </div>
        <p className="text-center fs-1 my-2">{data[questionIndex].question}</p>
        <div className="options-container">
          {data[questionIndex].options.map((option) => (
            <button
              className="btn primary"
              key={option.option}
              onClick={() => handleOptionClick(option, data[questionIndex])}
            >
              {option.option}
            </button>
          ))}
        </div>
        <div className="my-2 flex-space-between">
          <button
            disabled={questionIndex === 0}
            className="btn primary"
            onClick={() =>
              dispatch({
                type: "PREVIOUS",
              })
            }
          >
            Previous
          </button>
          {questionIndex + 1 === data.length ? (
            <Link to="/results" className="btn primary" replace>
              Submit
            </Link>
          ) : (
            <button
              className="btn primary"
              onClick={() =>
                dispatch({
                  type: "NEXT",
                })
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
