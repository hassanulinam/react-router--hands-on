import { Link } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const ProfileInfo = () => {
  const { name, age, occupation, phno } = useProfile();

  return (
    <div>
      <div className="navbar">
        <h1>Profile Information</h1>
        <div className="nav-items">
          <Link to={`/profile-details/profile-update`}>Update Profile</Link>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        officia ipsum veniam harum repudiandae ex praesentium illo recusandae
        odio, natus quasi placeat pariatur vitae
      </p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Phone: {phno}</p>
    </div>
  );
};

export default ProfileInfo;
