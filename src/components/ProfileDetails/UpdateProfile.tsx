import { useProfile } from "../../context/ProfileContext";

const UpdateProfile = () => {
  const { setName, setAge, setOccupation, name, age, occupation } =
    useProfile();
  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="age"
          onChange={(e) => setAge(parseInt(e.currentTarget.value))}
        />
        <input
          type="text"
          value={occupation}
          placeholder="occupation"
          onChange={(e) => setOccupation(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default UpdateProfile;
