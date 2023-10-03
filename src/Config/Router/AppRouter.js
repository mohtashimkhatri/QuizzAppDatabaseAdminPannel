import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../../Screen/Signup/Signup";
import Login from "../../Screen/Login/Login";
import Dashborad from "../../Screen/Dashborad/Dashborad";
import Protected from "../../Screen/Protected";
import ModuleNotFound from "../../Screen/ModuleNotFOund/ModuleNotFound";
import Admin from "../../Screen/Dashborad/DashboardScreen/Admin";
import Student from "../../Screen/Student/Student";
import QuizApp from "../../Screen/QuizApp/QuizApp";
import Result from "../../Screen/Result/Result";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected />} />
          <Route path="signp" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="adminproected/*" element={<Dashborad />} />
          {/* <Route path="/okayhuagya" element={<Admin />} /> */}
          <Route path="*" element={<ModuleNotFound />} />
          <Route path="student" element={<Student />} />
          <Route path="quizdata/:id" element={<QuizApp />} />
          <Route path="resultdata/:id" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
