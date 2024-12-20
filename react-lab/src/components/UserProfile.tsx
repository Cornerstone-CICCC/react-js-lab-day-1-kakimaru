import { User } from "../types/user.types";

type Props = {
  user: User;
};

const UserProfile = ({ user }: Props) => {
  const { fullName, age, education, gender, skills, bio } = user;
  
  return (
    <div>
      <p>{fullName}</p>
      <p>{age}</p>
      <p>{education}</p>
      <p>{gender}</p>
      <p>{skills.join(", ")}</p>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
