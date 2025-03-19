import React from "react";
import "./TaskList.css";
import TaskCard from "./TaskCard";

function TaskList({data}) {
  return (
    <div className="task-list">

       {
        data? data.taskListData.map((card,index)=>{
          return <TaskCard key={index} card={card}/>;
        }):""
       }
      
    </div>
  );
}

export default TaskList;
