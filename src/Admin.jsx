import React from "react";

const Admin = ({ admin }) => {
  return (
    <div>
      <table className="table table-bordered table-dark bg-dark">
        <tr>
          <td>{admin.username}</td>
          <td>{admin.password}</td>
          <td>{admin.firstname}</td>
          <td>{admin.lastname}</td>
          <td>{admin.type}</td>
        </tr>
      </table>
    </div>
  );
};

export default Admin;
