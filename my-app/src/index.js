import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NofificationList from "./chapter_06/NotificationList";
import Accommodate from "./chapter_07/Accommodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import ConfirmButtonFunction from "./chapter_08/ConfirmButtonFunction";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(() => {
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library /> */}
    {/* <Clock /> */}
    {/* <CommentList /> */}
    {/* <NofificationList /> */}
    {/* {<Accommodate />} */}
    {/* <ConfirmButton /> */}
    {/* <ConfirmButtonFunction /> */}
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
    {/* <SignUp /> */}
    <Calculator />
  </React.StrictMode>
);
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
