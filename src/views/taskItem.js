import React from "react";

function taskItem() {
  return (
    <div id="allTasks" className="row container-fluid">
      <h4 id="allTasksH">Tasks:</h4>
      <div id="allTasksDiv" className="row">
        Nothing to show! Use "Add a Task" section above to add tasks.
      </div>
    </div>
  );
}

export default taskItem;
