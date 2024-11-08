// src/routes/index.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AuthCallback from "../pages/AuthCallback";
import ReportIncident from "../pages/ReportIncident/ReportIncident";
import ViewReports from "../pages/ViewReports/ViewReports";
import ManageReports from "../pages/ManageReports/ManageReports";
import Chatbot from "../components/chatbot/Chatbot"; // Chatbot 페이지 추가

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/auth/kakao/callback" element={<AuthCallback />} />

      {/* 신고 및 관리 페이지 경로 설정 */}
      <Route path="/report-incident" element={<ReportIncident />} />
      <Route path="/view-reports" element={<ViewReports />} />
      <Route path="/manage-reports" element={<ManageReports />} />
      
      {/* Chatbot 경로 추가 */}
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}

export default AppRoutes;
