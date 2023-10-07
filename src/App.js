import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import GroupBuys from "./Components/Pages/GroupBuys/GroupBuys";
import GroupBuyers from "./Components/Pages/GroupBuyers/GroupBuyers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/GroupBuys" element={<GroupBuys/>}/>
        <Route path="/GroupBuyers" element={<GroupBuyers/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
