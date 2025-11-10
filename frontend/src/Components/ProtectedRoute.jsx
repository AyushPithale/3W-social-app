import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import API from "../api/axiosConfig";
import { useUser } from "../context/userContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUser();
const token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (loading) return <p style={ {display:"flex", justifyContent:"center" ,alignItems:"center"}}>Loading...</p>;

  return children;
}
