import * as React from "react";
import "./Dashborad.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Input from "../../Component/Input";
import SmButton from "../../Component/SmButton";
import {
  FbDataSend,
  GetData,
  LogoutoftheYear,
} from "../../Config/FirebaseConfig/FirebaseMthod";
import { set } from "firebase/database";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import Admin from "./DashboardScreen/Admin";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [model, setModel] = React.useState({});
  const [data, setData] = React.useState([]);

  const addQuizPanel = () => {
    FbDataSend(model, "AdminPAnel")
      .then((res) => {
        console.log(res);
        // setModel({});
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ReseavedData = () => {
    GetData("AdminPAnel")
      .then((res) => {
        const arr = [];
        Object.keys(res).map((key) => {
          arr.push(res[key]);
        });
        console.log("Keys", Object.keys(res));
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    ReseavedData();
  }, []);
  console.log("Array", data);
  const navigator = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            QuizApp Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <BiSolidUserCircle className="FontWaight" />
          <List>
            {data.map((text, index) => (
              <ListItem
                onClick={() => {
                  let data = prompt("Enter ScretKey");
                  if (data === text.ScretKey) {
                    console.log("okay");
                    navigator(`/adminproected/okayhuagya/${text.QuizName}`);
                  } else {
                    alert("please ENter Your Correct scret key");
                  }
                }}
                key={index}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{<MdQuiz className="fs-3" />}</ListItemIcon>
                  <ListItemText primary={text.QuizName} />
                </ListItemButton>
              </ListItem>
            ))}
            <SmButton
              onClick={() => {
                LogoutoftheYear()
                  .then((res) => {
                    navigator("/login");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              label="logout"
            />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <div className="container">
          <div className="row">
            <div className="col-md-4 p-3">
              <Input
                onchnage={(e) =>
                  setModel({ ...model, QuizName: e.target.value })
                }
                label="QuizNAme"
                value={model.QuizName}
              />
            </div>
            <div className="col-md-4 p-3">
              <Input
                onchnage={(e) =>
                  setModel({ ...model, QuizDuration: e.target.value })
                }
                label="Quiz Duration"
                value={model.QuizDuration}
              />
            </div>
            <div className="col-md-4 p-3">
              <Input
                onchnage={(e) =>
                  setModel({ ...model, ScretKey: e.target.value })
                }
                label="ScretKey"
                value={model.ScretKey}
              />
            </div>
            <div className="col-md-4 p-3">
              <Input
                onchnage={(e) =>
                  setModel({ ...model, Quizopen: e.target.value })
                }
                label="Quiz Open"
                value={model.Quizopen}
              />
            </div>
            <div className="col-md-8 p-3">
              <Input
                onchnage={(e) =>
                  setModel({ ...model, Description: e.target.value })
                }
                label="Description"
                value={model.Description}
              />
            </div>
            <div className="col-md-4 p-3">
              <SmButton label="Save" onClick={addQuizPanel} />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="okayhuagya/:id" element={<Admin />} />
        </Routes>
      </Box>
    </Box>
  );
}
