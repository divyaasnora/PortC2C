import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
const AdminPage = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
   useEffect(() => {
    axios.get("http://localhost:3000/pending-users")
      .then(res => setPendingUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);
useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("approval-request", (user) => {
      console.log("New user waiting for approval:", user);
      setPendingUsers(prevUsers => [...prevUsers, user]);
    });
    return () => socket.disconnect();
  }, []);
const approveUser = (id) => {
    axios.post("http://localhost:3000/approve-user", { userId: id })
      .then(() => {
        alert("User approved!");
        setPendingUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      })
      .catch(err => console.error("Error approving user:", err));
  };
return (
    <div>
      <h2>Admin Approval Page</h2>
      {pendingUsers.length > 0 ? (
        <ul>
          {pendingUsers.map(user => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              {user.name} ({user.email})
              <button
                style={{
                  marginLeft: "10px",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  cursor: "pointer"
                }}
                onClick={() => approveUser(user.id)}
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending users.</p>
      )}
    </div>
  );
};

export default AdminPage;
