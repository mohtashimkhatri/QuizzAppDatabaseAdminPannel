import { set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { fbAuth, signOut } from "../Config/FirebaseConfig/FirebaseMthod";
import { useNavigate } from "react-router-dom";

function Protected() {
  const nigatorhuagya = useNavigate();
  const [laoder, setLaoder] = useState(true);
  let Navigate = useNavigate();
  const checkAuth = () => {
    fbAuth()
      .then((res) => {
        setLaoder(false);
      })
      .catch((err) => {
        setLaoder(false);
        Navigate("login");
      });
    const Auth = false;
    if (Auth) {
    } else {
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return <div>{laoder ? <><div class="w-100 h-100 d-flex justify-content-center align-items-center  ">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div></> : nigatorhuagya('adminproected')}</div>;
}

export default Protected;
