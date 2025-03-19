import React from "react";
import Header from "../Reusable/Header";
import TaskCount from "../Reusable/TaskCount";
import "./UserDashboard.css";
import TaskList from "../Reusable/TaskList";
function UserDasboard({data}) {
  return (
    <div className="dashBoard">
      <Header data={data} />
      <main>
        <TaskCount  data={data}/>
        <TaskList data={data} />
      </main>
    </div>
  );
}

export default UserDasboard;
