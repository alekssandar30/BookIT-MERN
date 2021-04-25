import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from './components/routing/PrivateRoute';

// Pages
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen/ResetPasswordScreen';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
