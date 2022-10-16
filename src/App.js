import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Page404 from "./components/Page404";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/user/:name" element={<User/>}/>
          <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
