import React from "react";

function TaskCard({ card }) {
  return (
    <div>
      <div
        className="task"
        style={{
          backgroundColor:
            card.taskStatus == "Completed"
              ? "#cfffce"
              : card.taskStatus == "Accepted"
              ? "#feffd5"
              : card.taskStatus == "Rejected"
              ? "#ffe1e1"
              : "aliceblue",
        }}
      >
        <div className="task-title">
          <h2>{card.taskTitle}</h2>
        </div>
        <div className="task-description">
          <p>{card.taskDescription}</p>
        </div>
        <div className="task-info">
          <div className="task-status">{card.taskStatus}</div>
          <div className="task-due-date">{card.taskDueDate}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
