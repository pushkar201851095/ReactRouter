import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
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
          <Route path="/user/:name" element={<User/>}></Route>
          <Route path="/filter" element={<Filter/>}></Route>
          <Route path="/*" element={<Navigate to="/"/>}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
