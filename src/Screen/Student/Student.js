import React, { useEffect, useState } from "react";
import { GetData } from "../../Config/FirebaseConfig/FirebaseMthod";
import SmButton from "../../Component/SmButton";
import { useNavigate } from "react-router-dom";

function Student() {
  const [data, setData] = useState([]);
  const navigator = useNavigate();
  const ReseavedData = () => {
    GetData("AdminPAnel")
      .then((res) => {
        console.log(res);
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
  useEffect(() => {
    ReseavedData();
  }, []);
  return (
    <div className="m-5">
      <h1 className="text-center p-3">How To chose QuizApp </h1>
      <div className="container p-5">
        <div className="row"></div>
        {data.map((e, i) => {
          return (
            <div className="col-md-12 m-3">
              <SmButton
                onClick={() => {
                  navigator(`/quizdata/${e.QuizName}`);
                }}
                label={e.QuizName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Student;
