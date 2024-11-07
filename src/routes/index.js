// src/routes/index.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AuthCallback from "../pages/AuthCallback"; // 새로 추가

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/auth/kakao/callback" element={<AuthCallback />} /> {/* AuthCallback 라우트 추가 */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
