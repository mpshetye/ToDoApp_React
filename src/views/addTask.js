import React from "react";

export default function addTask() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navScroll"
      data-bs-offset="0"
      tabindex="0"
      class="container my-4"
    >
      <div id="home" class="container my-4">
        <h1 class="text-center">Welcome to To Do App</h1>
        <div class="card my-5">
          <div class="card-body">
            <h5 class="card-title">Add title</h5>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="addTitle"
                aria-describedby="title"
                placeholder="Enter title"
              />
            </div>
            <h5 class="card-title my-3">Add Task</h5>
            <div class="form-group">
              <textarea class="form-control" id="addTxt" rows="3"></textarea>
            </div>
            <div class="form-check my-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="messageCheckbox"
              />
              <label class="form-check-label text-danger" for="messageCheckbox">
                Mark Task Important
              </label>
            </div>
            <button class="btn btn-primary" id="addBtn">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
