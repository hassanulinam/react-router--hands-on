import { lazy, Suspense } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import UpdateProfile from "./UpdateProfile";
const AppDetails = lazy(() => import("./AppDetails"));
const BankDetails = lazy(() => import("./BankDetails"));
const ProfileInfo = lazy(() => import("./ProfileInfo"));
const Subscriptions = lazy(() => import("./Subscriptions"));

const ProfileDetails = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <div className="navbar">
        <div className="nav-items">
          <Link to="/profile-details/app-details">App Details </Link>
          <Link to="/profile-details/profile-info">Profile Info </Link>
          <Link to="/profile-details/bank-details">Bank Details </Link>
          <Link to="/profile-details/subscription">Subscriptions</Link>
        </div>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <LogoutBtn />
        </div>
      </div>
      <Switch>
        <Route exact path={`${path}`}>
          <Suspense fallback="loading...">
            <ProfileInfo />
          </Suspense>
        </Route>
        <Route path={`${path}/profile-update`}>
          <UpdateProfile />
        </Route>
        <Route path={`${path}/profile-info`}>
          <Suspense fallback="loading...">
            <ProfileInfo />
          </Suspense>
        </Route>
        <Route path={`${path}/bank-details`}>
          <Suspense fallback="loading...">
            <BankDetails />
          </Suspense>
        </Route>
        <Route path={`${path}/subscription`}>
          <Suspense fallback="loading...">
            <Subscriptions />
          </Suspense>
        </Route>
        <Route path={`${path}/app-details`}>
          <Suspense fallback="loading...">
            <AppDetails />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileDetails;
