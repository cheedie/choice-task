import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Answers = () => {
  const history = useHistory();
  const answers = history.location.state;

  let popularity = localStorage.getItem("popularity");

  let correctOption = answers[Math.floor(Math.random() * answers.length)];

  return (
    <>
      <main>
        <header className="header">
          <div className="section">
            <img src="assets/images/logo.png" alt="logo" className="logo" />
          </div>
        </header>
        <div className="form-container">
          <div className="form">
            <h5>Your Answer is :</h5>
            <ol type="A">
              {answers.map((answer, index) => {
                return (
                  <React.Fragment key={index}>
                    <li
                      className={
                        answers.indexOf(correctOption) === index
                          ? "correct-option"
                          : ""
                      }
                    >
                      {answer}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>

            <div className="answer-btn-container">
              <button className="btn option-btn">Toggle Answer</button>
              <button className="btn popularity-btn">
                Question Popularity
              </button>
              <button className="btn answer-btn">
                <NavLink to="/" className="answer-btn">
                  Ask Again
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
