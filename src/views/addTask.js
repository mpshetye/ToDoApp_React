import React, { useState }  from "react";

export default function AddTask(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
        alert("Title or Description cannot be blank");
    }
    else {
        props.addTask(title, desc);
        setTitle("");
        setDesc("");
    }
}
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navScroll"
      data-bs-offset="0"
      tabIndex="0"
      className="container my-4"
    >
      <div id="home" className="container my-4">
        <h1 className="text-center">Welcome to To Do App</h1>
        <div className="card my-5">
          <div className="card-body">
            <h5 className="card-title">Add title</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="addTitle"
                aria-describedby="title"
                placeholder="Enter title"
                value={title} onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <h5 className="card-title my-3">Add Task</h5>
            <div className="form-group">
              <textarea className="form-control" id="addTxt" rows="3" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
            </div>
            <div className="form-check my-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="messageCheckbox" onClick={(e)=>{
                  props.onCheck(e);
                }}
              />
              <label className="form-check-label text-danger" htmlFor="messageCheckbox">
                Mark Task Important
              </label>
            </div>
            <button className="btn btn-primary" id="addBtn" onClick={submit}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
