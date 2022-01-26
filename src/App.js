import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Navigation from './components/Navigation/Navigation';
import Packages from './components/Packages/Packages';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/packages">
            <Packages/>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
