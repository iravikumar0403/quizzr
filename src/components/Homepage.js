import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <main className="main grid grid-50-50">
      <div className="content-center">
        <h1 className="text-center text-primary">Welcome to Quizzr!</h1>
        <p className="text-center fs-1">A quiz portal for cosmophiles</p>
        <Link to="/quizzes" className="m-auto btn primary">
          Explore quizzes
        </Link>
      </div>
      <div>
        <img
          className="img"
          src="https://img.freepik.com/free-vector/hand-drawn-people-asking-questions_52683-60048.jpg?size=626&ext=jpg"
          alt="quiz"
        />
      </div>
    </main>
  );
};
