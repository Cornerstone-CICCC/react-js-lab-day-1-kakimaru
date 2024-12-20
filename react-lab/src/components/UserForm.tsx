import { ChangeEvent, FormEvent } from "react";
import { User } from "../types/user.types";

type Props = {
  formData: Omit<User, 'id'>,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  onSubmit: (e: FormEvent) => void,
  editingId: number
}

const UserForm = ({formData, onChange, onSubmit, editingId}: Props) => {

  return (
    <form onSubmit={onSubmit} >
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="education">Education</label>
        <select
          name="education"
          id="education"
          value={formData.education}
          onChange={onChange}
        >
          <option value="">Select your education</option>
          <option value="Grade school">Grade school</option>
          <option value="high school">high school</option>
          <option value="college">college</option>
        </select>
      </div>
      <div>
        <p>Gender</p>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender.includes('male')}
          onChange={onChange}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender.includes("female")}
          onChange={onChange}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          checked={formData.gender.includes("other")}
          onChange={onChange}
        />
      </div>
      <div>
        <p>Skills</p>
        <label htmlFor="typescript">TypeScript</label>
        <input
          type="checkbox"
          id="typescript"
          name="skills"
          value="typescript"
          checked={formData.skills.includes("typescript")}
          onChange={onChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="checkbox"
          id="react"
          name="skills"
          value="react"
          checked={formData.skills.includes("react")}
          onChange={onChange}
        />
        <label htmlFor="node">Node</label>
        <input
          type="checkbox"
          id="node"
          name="skills"
          value="node"
          checked={formData.skills.includes("node")}
          onChange={onChange}
        />
        <label htmlFor="nosql">NoSQL</label>
        <input
          type="checkbox"
          id="nosql"
          name="skills"
          value="nosql"
          checked={formData.skills.includes("nosql")}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={onChange}
        />
      </div>
      <button type="submit">{editingId ? "Save changes" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
