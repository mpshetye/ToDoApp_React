import React from "react";

function impTaskItem() {
  return (
    <div id="impTasks" className="row container-fluid">
      <h4 id="impTaskH" className="text-danger">
        Important Tasks:
      </h4>
      <div id="impTaskDiv" className="row">
        Nothing to show! Use "Add a Task" section above to add tasks.
      </div>
    </div>
  );
}

export default impTaskItem;
