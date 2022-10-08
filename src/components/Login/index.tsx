import { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPhno from "./LoginPhno";
import LoginVerify from "./LoginVerify";

const Login = (props: any) => {
  const [previousLocation] = useState<any>(
    props.location?.state?.previousLocation
  );

  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/`}>
          <Redirect to={`${path}/phone-number`} />
        </Route>
        <Route path={`${path}/phone-number`}>
          <LoginPhno />
        </Route>
        <Route path={`${path}/verify`}>
          <LoginVerify to={previousLocation || "/"} />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
