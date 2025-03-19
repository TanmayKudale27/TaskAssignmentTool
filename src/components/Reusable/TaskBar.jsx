import React from "react";

function TaskBar({task,user}) {
  return (
    <div className="task-bar">
      <div className="task-name">{task.taskTitle}</div>
      <div className="user-id">100{user.id}</div>
      <div className="assigned-date">{task.taskAssignedDate}</div>
      <div className="due-date">{task.taskDueDate}</div>
      <div className="status">{task.taskStatus}</div>
    </div>
  );
}

export default TaskBar;

