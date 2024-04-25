import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
