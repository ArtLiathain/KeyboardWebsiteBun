import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainContent words="HELP"></MainContent>
    </div>
  );
}

export default App;
