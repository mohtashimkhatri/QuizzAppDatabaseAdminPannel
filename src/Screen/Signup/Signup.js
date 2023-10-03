import React, { useState } from "react";
import "./Signup.css";
import Input from "../../Component/Input";
import SmButton from "../../Component/SmButton";
import ShowPassordInput from "../../Component/ShowPassordInput";
import { Link, useNavigate } from "react-router-dom";
import { Signupfb } from "../../Config/FirebaseConfig/FirebaseMthod";
import { Login } from "@mui/icons-material";

function Signup() {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const SignupofData = () => {
    console.log(model);
    Signupfb(model)
      .then((RES) => {
        alert("User Creared Succesfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(err)
      });
  };
  return (
    <>
      <div className="Main__coloring">
        <div className="paper shadow">
          <h1 className="Heading__text">Signup</h1>
          <div className="p-2 my-3">
            <Input
              type="text"
              label="UserName"
              onchnage={(e) => {
                setModel({ ...model, UserName: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
            <Input
              type="email"
              label="Email"
              onchnage={(e) => {
                setModel({ ...model, Email: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
            <Input
              label="Password"
              onchnage={(e) => {
                setModel({ ...model, Password: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
            <Input
              type="text"
              label="Contact No"
              onchnage={(e) => {
                setModel({ ...model, Contact: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
            <SmButton label="Signup" onClick={SignupofData} />
          </div>
          <div className="p-2 my-3">
            <Link to="/login">I Have Already Created your Acount</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
