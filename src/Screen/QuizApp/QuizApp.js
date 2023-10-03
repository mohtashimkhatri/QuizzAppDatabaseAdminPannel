import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetData } from "../../Config/FirebaseConfig/FirebaseMthod";

function QuizApp() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(0);
  let params = useParams();
  const navigate = useNavigate();
  const Newotdarsr = () => {
    GetData(params.id)
      .then((res) => {
        const arr = [];
        Object.keys(res).map((key) => {
          arr.push(res[key]);
        });
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const NextQuestion = (e) => {
    if (e == data[score].correctQuiz) {
      setResult(result + 1);
      setScore(score + 1);
    } else {
      setScore(score + 1);
    }
    if (score + 1 == data.length) {
      alert("Question is Complted");
      navigate(`/resultdata/${result}`);
    }
  };
  console.log(result);
  useEffect(() => {
    Newotdarsr();
  }, []);
  console.log(result);
  console.log(score, data.length);
  return (
    <div className="p-5 w-100">
      <h1 className="text-center m-3">Quiz App </h1>
      <h1 className="text-center m-3">
        <span className="fs-4">{data.length}</span>/
        <span className="fw-bold">{score + 1}</span>
      </h1>
      <div className="w-25  m-auto shadow rounded h-50 bg-info p-3">
        <h3>Q : {data[score]?.Qustion}</h3>
      </div>
      <div className="text-center m-3">
        {data[score]?.OptionQuiz.map((e, i) => {
          return (
            <div className="m-3">
              <button
                onClick={() => {
                  NextQuestion(e.value);
                }}
                className="w-25  btn btn-info   shadow rounded h-25 p-3"
              >
                {e.value}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuizApp;
