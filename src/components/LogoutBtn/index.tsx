import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LogoutBtn = () => {
  const history = useHistory();
  return (
    <button
      className="logout-btn"
      onClick={() => {
        Cookies.remove("jwt");
        history.push("/login");
      }}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
