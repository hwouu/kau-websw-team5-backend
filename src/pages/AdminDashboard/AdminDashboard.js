// src/pages/UserDashboard/UserDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
          onClick={() => navigate("/report-incident")}
        >
          신고하기
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md mx-2"
          onClick={() => navigate("/view-reports")}
        >
          신고 내역 보기
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
