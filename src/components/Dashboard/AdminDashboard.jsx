import React, { useEffect, useState } from "react";
import Header from "../Reusable/Header";
import AdminForm from "../Reusable/AdminForm";
import "./AdminDashboard.css";
import ClientPanel from "../Reusable/ClientPanel";
import TaskChart from "../Reusable/TaskChart";
import { getAdminData, getLocalData } from "../../utils/LocalStorage";

function AdminDashboard({ data, users }) {
  const [usersData, setUsersData] = useState(users);

  function AssignTask(input_id, newTask) {
    var user = users.find((user) => user.id == input_id);
    user["taskListData"].unshift(newTask);
    ++user["taskCount"]["assigned"];
    users.splice(Number(input_id) - 1, 1, user);
    localStorage.setItem("users", JSON.stringify(users));
    setUsersData(getLocalData());
  }

  return (
    <div>
      {data ? <Header data={data} /> : ""}
      <div className="admin-panal">
        <AdminForm users={usersData} AssignTask={AssignTask} />
        <ClientPanel />
        <TaskChart users={usersData} />
      </div>
    </div>
  );
}

export default AdminDashboard;
