import { useEffect, useState } from 'react';

type UserProp = {
  name: string;
  id: string;
};

export const AppView: React.FC = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch('http://localhost:3000/users');
    const json = await res.json();

    setUsers(json);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>App view</h1>
      <div>
        <h2>Users:</h2>
        {users &&
          users.map((user: UserProp) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};
