import "./App.css";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/" exat element={<HomePage />} />
          <Route path="/conslting" element={<Consulting />} />
          <Route path="/development" element={<Products />} />
          <Route path="/development" element={<Services />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/design" element={<Design />} />

          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
