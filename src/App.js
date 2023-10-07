import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Distributors from "./Pages/Distributors";
import Switches from "./Pages/Switches";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Navbar/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/Switches" element={<Switches/>}></Route>
          <Route path = "/Distributors" element={<Distributors/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
