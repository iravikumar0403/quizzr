import React from "react";
import { QuizCard } from "../components/QuizCard";
import { useQuizCategories } from "../hooks/useQuizCategories";

export const QuizCategories = () => {
  const { loading, data, error } = useQuizCategories();
  console.log(loading, data, error);

  if (loading)
    return (
      <main className="main">
        <div className="loader"></div>
      </main>
    );
  return (
    <main className="main">
      <div>
        <h1 className="text-center text-primary">Available Quizzes</h1>
      </div>
      <div className="categories-container">
        {data.map((quiz) => (
          <QuizCard quiz={quiz} />
        ))}
      </div>
    </main>
  );
};
