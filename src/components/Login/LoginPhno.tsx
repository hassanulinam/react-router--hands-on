import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const LoginPhno = () => {
  const [phoneNumber, setPhoneNumber] = useState("1234567890");
  const isValidPhno = (value: string) => value.match(/\d/g)?.length === 10;

  const { setPhno } = useProfile();
  const history = useHistory();

  const onSubmitPhno = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhno(phoneNumber)) {
      alert("Please enter a valid phone number");
    } else {
      setPhno(phoneNumber);
      history.push("/login/verify");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitPhno}>
        <input
          type="text"
          placeholder="Enter your phno"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPhno;
