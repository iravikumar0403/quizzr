import { Loader, QuizCard } from "../components";
import { useQuizCategories } from "../hooks";

export const QuizCategories = () => {
  const { loading, data, error } = useQuizCategories();
  console.log(loading, data, error);

  if (loading) return <Loader />;
  return (
    <main className="main">
      <div>
        <h1 className="text-center text-primary">Available Quizzes</h1>
      </div>
      <div className="categories-container">
        {data.map((quiz) => (
          <QuizCard quiz={quiz} key={quiz.id} />
        ))}
      </div>
    </main>
  );
};
