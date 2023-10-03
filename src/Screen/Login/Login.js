import React, { useState } from "react";
// import "./Signup.css";
import Input from "../../Component/Input";
import SmButton from "../../Component/SmButton";
import ShowPassordInput from "../../Component/ShowPassordInput";
import { Link, useNavigate } from "react-router-dom";
import { Loginfb } from "../../Config/FirebaseConfig/FirebaseMthod";

function Login() {
  let navigate = useNavigate();
  const [model, setModel] = useState({});
  const lginofData = () => {
    model.role = "user";
    console.log(model);
    Loginfb(model)
      .then((res) => {
        alert(res);
        if (model.role === "admin") {
          navigate("/");
        } else {
          navigate("/student");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <div className="Main__coloring">
        <div className="paper shadow">
          <h1 className="Heading__text">login</h1>
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
            <SmButton label="Login" onClick={lginofData} />
          </div>
          <div className="p-2 my-3">
            <Link to="/signp">New Created Acount</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
