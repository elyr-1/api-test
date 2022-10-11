import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as testService from "./svc/test";
import Admin from "./Admin";

const App = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  useEffect(() => {
    testService.getAdminUsers().then((response) => {
      setAdminUsers(response.data);
    });
  }, [adminUsers, setAdminUsers]);
  return (
    <div className="App">
      <div className="container">
        {adminUsers.map((admin) => (
          <Admin key={admin.username} admin={admin} />
        ))}
      </div>
    </div>
  );
};

export default App;
