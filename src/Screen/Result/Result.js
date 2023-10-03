import { Paper } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SmButton from "../../Component/SmButton";

function Result() {
  let params = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-center m-5 shadow p-5">
        Your Score is {params.id}😊
      </h1>
      <SmButton
        label="backToQuiz"
        onClick={() => {
          navigate("/student");
        }}
      />
    </>
  );
}

export default Result;
