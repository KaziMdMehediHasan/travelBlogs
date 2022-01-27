import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Navigation from './components/Navigation/Navigation';
import Packages from './components/Packages/Packages';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import UserExperience from './components/UserExperience/UserExperience';
import Dashboard from './components/Dashboard/Dashboard';
import BlogDetail from './components/BlogDetail.js/BlogDetail';


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
          <PrivateRoute path="/blogDetail/:id">
            <BlogDetail/>
          </PrivateRoute>
          <PrivateRoute path="/userExperience">
            <UserExperience/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
