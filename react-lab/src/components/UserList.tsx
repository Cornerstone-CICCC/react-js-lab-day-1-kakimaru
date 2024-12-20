import { useState } from "react";
import { User } from "../types/user.types";
import UserProfile from "./UserProfile";

type Props = {
  users: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserList = ({ users, onEdit, onDelete }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      {users.map((user) => (
        <div>
          <p>
            <span>{user.id}</span>
            {user.fullName}
          </p>
          {isShow ? <UserProfile user={user} key={user.id} /> : ""}
          <div>
            <button onClick={handleShow}>View</button>
            <button onClick={() => onEdit(user.id)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
