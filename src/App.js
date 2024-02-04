// React
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Sidebar from "./components/Sidebar.";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import CreateProject from "./pages/CreateProject/CreateProject";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/create">
              <CreateProject />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
