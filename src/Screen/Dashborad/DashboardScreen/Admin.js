import React, { useState } from "react";
import FullWidthTextField from "../../../Component/Input";
import SmButton from "../../../Component/SmButton";
import { Button } from "@mui/material";
import { FbDataSend } from "../../../Config/FirebaseConfig/FirebaseMthod";
import { useParams } from "react-router-dom";

function Admin() {
  const [quizalldata, setQuizalldata] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [correct, setCorrect] = useState([]);
  let params = useParams();
  const id = params.id;
  // console.log(id);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const AddOptionnota = () => {
    const newItem = { value: inputValue };
    console.log("sdfsdfsdf", newItem);
    // const newData = [...data, newItem];
    setData([...data, newItem]);
    console.log("data", data);
    setInputValue("");
  };
  console.log("corr", correct);
  const QuizAdd = () => {
    quizalldata.correctQuiz = [...correct];
    quizalldata.OptionQuiz = [...data];
    console.log("quizalldata", quizalldata);
    FbDataSend(quizalldata, params.id)
      .then((res) => {
        setCorrect([]);
        setData([]);
      })
      .catch((err) => {
        console.log(err);
        3;
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
            <FullWidthTextField
              label="Enter Qustion"
              onchnage={(e) => {
                setQuizalldata({ ...quizalldata, Qustion: e.target.value });
              }}
            />
          </div>
          <div className="col-md-10 p-3">
            <FullWidthTextField
              label="Enter Qustion"
              onchnage={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className="col-md-2 p-3">
            <SmButton label="Add option" onClick={AddOptionnota} />
          </div>
          <div className="col-md-6 p-3">
            <h1 className="text-center">option</h1>

            {data.map((e, i) => {
              return (
                <>
                  <div key={i} className="m-3">
                    <SmButton
                      onClick={() => {
                        setCorrect([e.value]);
                      }}
                      label={e.value}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-6 p-3">
            <h1 className="text-center">correct Question</h1>
            {correct.map((e, i) => {
              return (
                <>
                  <div key={i} className="m-3">
                    <SmButton label={e} />
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-12">
            <Button
              sx={{
                width: 1000,
                padding: 2,
                margin: 2,
              }}
              variant="contained"
              color="success"
              onClick={QuizAdd}
            >
              Add QUiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
