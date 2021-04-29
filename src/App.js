import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
