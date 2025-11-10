import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import API from "../api/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
 const {user ,setUser} = useUser()
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      setUser(res.data.user)
      localStorage.setItem("token", res.data.token);
      navigate("/feed");
    } catch(err) {
        console.log(err)
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h5" align="center">Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Login</Button>
        <Typography align="center" sx={{ mt: 2 }}>
          No account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </Container>
  );
}
