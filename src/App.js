import "./App.css";
import HomePage from "./components/pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Consulting from "./components/pages/Consulting";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Design from "./components/pages/Design";
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exat component={<HomePage />} />
          <Route path="/conslting" exat component={<Consulting />} />
          <Route path="/development" exat component={<Products />} />
          <Route path="/development" exat component={<Services />} />
          <Route path="/sign-up" exat component={<SignUp />} />
          <Route path="/design" exat component={<Design />} />

          <Route path="/marketing" exat component={<Marketing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
