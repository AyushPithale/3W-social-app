import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import PostDetail from "./pages/PostDetails";
import "./style.css";
import Navbar from "./Components/Navbar";
import API from "./api/axiosConfig";

function App() {
    async function fetchDATA() {

      const token = localStorage.getItem("token")

      if(!token){
        return <Navigate to="/login" />
      }
    
     const res = await API.get("/auth/me")
  
     
      
    }
  return (

  


    <BrowserRouter>
    <div className="container">
      <Navbar />
    </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
