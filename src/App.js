import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
