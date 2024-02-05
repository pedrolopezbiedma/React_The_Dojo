// React
import "./OnlineUsers.css";

// Hooks
import { useFirestoreGet } from "../hooks/useFirestoreGet";

// Components
import Avatar from "./Avatar";

const OnlineUsers = () => {
  const { documents: users, error } = useFirestoreGet("users");

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {users &&
        users.map((user) => (
          <div key={user.id} className="user-list-item">
            <span className={user.online ? "online-user" : ""}>
              {" "}
              {user.online}
            </span>
            <span>{user.displayName}</span>
            <Avatar user={user} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
