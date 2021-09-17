import Header from "./views/header";
import AddTask from "./views/addTask";
import TaskComponent from "./views/taskComponent";
import About from "./views/about";
import { footer as Footer } from "./views/footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let taskIndexCount = 0;
  let imptaskIndexCount = 0;
  let initTask;
  if (localStorage.getItem("tasks") === null) {
    initTask = [];
  } else {
    initTask = JSON.parse(localStorage.getItem("tasks"));
  }
  const [tasks, setTasks] = useState([]);
  const [checkStatus, setCheckStatus] = useState(false);

  const onCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckStatus(true);
    } else {
      setCheckStatus(false);
    }
  };

  const addTask = (title, desc) => {
    if (checkStatus) {
      console.log("I am adding this todo to imp", title, desc);
      let myObj = {
        title: title,
        desc: desc,
        impStatus: true,
        index: indexFunc(),
        count: taskCountFunc(),
      };
    } else {
      console.log("I am adding this simple todo", title, desc);
      let myObj = {
        title: title,
        desc: desc,
        impStatus: false,
        index: indexFunc(),
        count: impTaskCountFunc(),
      };
    }

    let indexCount = 0;
    function indexFunc() {
      let j = indexCount++;
      return j;
    }

    function impTaskCountFunc() {
      let n = imptaskIndexCount++;
      return n;
    }

    function taskCountFunc() {
      let m = taskIndexCount++;
      return m;
    }
  };

  const onEdit = () => {};

  const onDelete = () => {};

  return (
    <>
      <Header />
      <AddTask addTask={addTask} onCheck={onCheck} />
      <TaskComponent tasks={tasks} onEdit={onEdit} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
