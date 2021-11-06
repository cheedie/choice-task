import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const windowGlobal = typeof window !== "undefined" && window;

export const Answers = () => {
  const history = useHistory();

  const [frequency, setFrequency] = useState(0);

  const [displayPopularity, setDisplayPopularity] = useState(false);

  const popularityCheck = () => {
    const popularity = JSON?.parse(
      windowGlobal.localStorage?.getItem("popularity")
    ).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1);
    }, {});
    setFrequency(popularity[question]);
    setDisplayPopularity(true);
  };

  const correctOptionToggle = () => {
    let correctOption = answers[Math.floor(Math.random() * answers?.length)];
    setCorrectOption(correctOption);
  };

  useEffect(() => {
    if (history.location.state === undefined) {
      return history.push("/");
    }
  }, []);

  const answers = history.location.state?.answers;
  const question = history.location.state?.question;
  const [correctOption, setCorrectOption] = useState(
    answers && answers[Math.floor(Math.random() * answers?.length)]
  );

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
              {answers?.map((answer, index) => {
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
            {displayPopularity ? (
              <p className="popularity-text">Popularity: {frequency} times</p>
            ) : null}

            <div className="answer-btn-container">
              <button
                className="btn option-btn"
                onClick={() => correctOptionToggle()}
              >
                Toggle Answer
              </button>
              <button
                className="btn popularity-btn"
                onClick={() => popularityCheck()}
              >
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
