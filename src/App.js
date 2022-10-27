import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
// import Page404 from "./components/Page404";
import User from "./components/User";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/user/:name" element={<User/>}></Route>
          <Route path="/filter" element={<Filter/>}></Route>
          <Route path="/*" element={<Navigate to="/"/>}></Route>
          <Route path='/contact/' element={<Contact/>}>
              <Route path="company" element={<Company/>} />
              <Route path="channel" element={<Channel/>} />
              <Route path="other" element={<Other/>} />
              

          </Route>
           
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
