import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ProfileDetails from "./components/ProfileDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={(props: any) => <Login {...props} />} />
        <ProtectedRoute exact path="/" render={Home} />
        <ProtectedRoute
          path="/profile-details"
          render={() => <ProfileDetails />}
        />
      </Switch>
    </div>
  );
}

export default App;
