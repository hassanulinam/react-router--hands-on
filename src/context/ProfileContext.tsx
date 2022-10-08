import { createContext, useContext, useState } from "react";

const ProfileContext = createContext({
  phno: "",
  setPhno: (phno: string) => {},
  name: "",
  setName: (name: string) => {},
  age: 18,
  setAge: (age: number) => {},
  occupation: "",
  setOccupation: (occupation: string) => {},
});

const ProfileContextProvider = ({ children }: { children: JSX.Element }) => {
  const [phno, setPhno] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [occupation, setOccupation] = useState("");

  return (
    <ProfileContext.Provider
      value={{
        phno,
        name,
        age,
        occupation,
        setAge,
        setName,
        setOccupation,
        setPhno,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

export default ProfileContextProvider;
