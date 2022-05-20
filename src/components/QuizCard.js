import React from "react";
import { Link } from "react-router-dom";

export const QuizCard = ({ quiz }) => {
  const { id, title, media, description, no_of_questions } = quiz;
  return (
    <div className="card">
      <div className="card-media">
        <img className="img-responsive img-rounded" src={media} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title text-primary">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small>{no_of_questions} Questions</small>
        <Link
          to="/rules"
          state={{ next: `/quiz/${id}` }}
          className="btn primary"
        >
          Start quiz
        </Link>
      </div>
    </div>
  );
};
