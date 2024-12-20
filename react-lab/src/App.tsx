import { useState } from "react";
import { User } from "./types/user.types";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import toast, { Toaster } from "react-hot-toast"

const initialFormData: Omit<User, "id"> = {
  fullName: "",
  age: 0,
  education: "",
  gender: "",
  skills: [],
  bio: "",
};

const App = () => {
  const [editingId, setEditingId] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, "id">>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => {
        const skills = checked
          ? [...prevState.skills, value]
          : prevState.skills.filter((skill) => skill !== value);

        return { ...prevState, skills };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      // if editing
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, ...formData } : user
        )
      );
      setEditingId(0);
      toast.success("User updated")
      setFormData(initialFormData)
    } else {
      // if adding
      setUsers((prev) => [...prev, { id: prev.length + 1, ...formData }]);
      toast.success("User added")
      setFormData(initialFormData);
    }
  };

  const handleEdit = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setFormData({
        fullName: user.fullName,
        age: user.age,
        education: user.education,
        gender: user.gender,
        skills: user.skills,
        bio: user.bio,
      });
      setEditingId(user.id);
    }
  };

  const handleDelete = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id))
    toast.success("User deleted")
  }


  return (
    <div>
      <UserForm
        editingId={editingId}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <Toaster />
    </div>
  );
};

export default App;
