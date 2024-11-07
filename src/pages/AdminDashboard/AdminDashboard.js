// src/pages/AdminDashboard/AdminDashboard.js
import React from "react";

function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>
      <div className="text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">신고하기</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md mx-2">신고 보고서 관리</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
