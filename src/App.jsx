import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import UserDasboard from "./components/Dashboard/UserDasboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getAdminData, getLocalData, setLocalData } from "./utils/LocalStorage";
function App() {
  const [user, setUser] = useState(null);
  const [authData, setAuthData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const [loggedAdminData, setLoggedAdminData] = useState(null);
  useEffect(() => {
    // setLocalData();
    setAuthData(getLocalData());
  }, []);

  useEffect(() => {
    setAdminData(getAdminData());
  }, []);

  const handleUserLogin = (Uemail, Upassword) => {
    if (adminData) {
      let LoggedAdmin = adminData.find(
        (admin) => admin.email === Uemail && admin.password === Upassword
      );
      if (LoggedAdmin) {
        setLoggedAdminData(LoggedAdmin);
        setUser(LoggedAdmin.role);
      } else if (authData) {
        let LoggedUser = authData.find(
          (user) => user.email === Uemail && user.password === Upassword
        );
        if (LoggedUser) {
          setLoggedUserData(LoggedUser);
          setUser(LoggedUser.role);
          return;
        } else {
          alert("Invalid Credentials");
          return;
        }
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleUserLogin={handleUserLogin} />
      ) : user == "admin" ? (
        <AdminDashboard data={loggedAdminData} users={authData}/>
      ) : (
        <UserDasboard data={loggedUserData} />
      )}
    </>
  );
}

export default App;
