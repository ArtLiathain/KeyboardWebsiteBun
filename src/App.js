import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import GroupBuys from "./Components/Pages/GroupBuys/GroupBuys";
import GroupBuyers from "./Components/Pages/GroupBuyers/GroupBuyers";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/GroupBuys" element={<GroupBuys/>}/>
        <Route path="/GroupBuyers" element={<GroupBuyers/>}/>
      </Routes>
    </>
  );
}

export default App;
