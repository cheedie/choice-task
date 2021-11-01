import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";

function Dashboard() {
  const [question, setQuestion] = useState("");
  const [alert, setAlert] = useState(false);
  const [indexer, setIndexer] = useState(["newItem", "newItem", "newItem"]);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");

  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // to keep track of questions asked
  let questionsList =
    localStorage?.getItem("popularity") === null
      ? []
      : JSON?.parse(localStorage?.getItem("popularity"));

  const history = useHistory();

  const formInput = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question === "" && input === "") {
      setAlert(true);
    } else {
      localStorage?.setItem(
        "popularity",
        JSON?.stringify([...questionsList, question])
      );

      history.push({
        pathname: "/answer",
        state: { answers: answers, question: question },
      });
    }
  };

  const addOptions = () => {
    setIndexer([...indexer, "newItem"]);
  };

  const handleOptions = () => {
    if (input !== "") {
      setAnswers([...answers, input]);
    }
    setInput("");
  };

  return (
    <main>
      <header className="header">
        <div className="section">
          <img src="assets/images/logo.png" alt="logo" className="logo" />
        </div>
      </header>
      <div className="form-container">
        <div className="form">
          <p>Hey, Let's help you make choices</p>
          {alert && <Alert removeAlert={setAlert} />}
          <label htmlFor="questions" className="form-label">
            Questions:
          </label>
          <input
            className="form-input"
            placeholder="Type Your Question"
            type="text"
            id="questions"
            name="questions"
            value={question}
            onChange={formInput}
          />
          <div>
            <label htmlFor="Options" className="form-label">
              Options:
            </label>
            {indexer.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    className="form-input"
                    placeholder={alphabetArr[index]}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    onBlur={() => handleOptions()}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="btn-container">
            <button className="option-btn btn" onClick={addOptions}>
              + Option
            </button>
            <button
              className="btn answer-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={answers.length === 0 ? true : false}
            >
              ANSWER
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>
          {" "}
          <span /> &copy; 2021 Designed for your most critical decisions.
          &spades;
        </p>
      </footer>
    </main>
  );
}

export default Dashboard;
