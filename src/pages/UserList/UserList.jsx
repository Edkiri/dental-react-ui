import useGetUsers from './hooks/useGetUsers';
import './UserList.css';

export default function UserList() {
  const { users } = useGetUsers();

  return (
    <>
      <h1>Lista de usuarios</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <div className="user-card-name">
              <strong>Nombre:</strong>
              <span>{user.fullName}</span>
            </div>
            <div className="user-card-email">
              <strong>Email:</strong>
              <span>{user.email}</span>
            </div>
            <div className="roles-container">
              <strong>Role:</strong>

              {user.roles.map((role, index) => (
                <span key={`role-${index}`}>{role}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
