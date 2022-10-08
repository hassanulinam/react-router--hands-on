import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props: any) => {
  const token = Cookies.get("jwt");

  if (token === undefined) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { previousLocation: props.location.pathname },
        }}
      />
    );
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
