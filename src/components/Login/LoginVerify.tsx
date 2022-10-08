import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LoginVerify = ({ to }: { to: string }) => {
  const history = useHistory();
  const onSubmitOTP = () => {
    Cookies.set("jwt", "DUMMY_JWT_TOKEN", { expires: 3 });
    history.replace(to);
  };

  return (
    <div>
      <form onSubmit={onSubmitOTP}>
        <input type="text" placeholder="Enter OTP" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginVerify;
