
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { HeadNav } from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <HeadNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
