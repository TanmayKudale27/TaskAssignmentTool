import React from "react";
import TaskBar from "./TaskBar";

function TaskChart({users}) {
  console.log(users)

  return (
    <div className="task-chart">
      <div className="task-bar">
        <div className="task-name">Task Name</div>
        <div className="user-id">User ID</div>
        <div className="assigned-date">Assigned Date</div>
        <div className="due-date">Due Date</div>
        <div className="status">Status</div>
      </div>
      {
        users ? users.map((user,index)=>{
          return user["taskListData"].map((task,index)=>{
            return <TaskBar key={index} user={user} task={task} index={index} />
          })
        }):""
      }
    </div>
  );
}

export default TaskChart;
