// src/pages/ViewReports/ViewReports.js
import React from "react";

function ViewReports() {
  // 임시 신고 내역 데이터
  const reports = [
    { id: 1, location: "서울역", date: "2023-12-01 15:30", status: "분석 중" },
    { id: 2, location: "강남역", date: "2023-11-25 10:15", status: "완료" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">신고 내역 보기</h1>
      <ul className="space-y-4">
        {reports.map((report) => (
          <li
            key={report.id}
            className="p-4 border border-gray-300 rounded-md shadow-sm"
          >
            <div>위치: {report.location}</div>
            <div>일시: {report.date}</div>
            <div>상태: {report.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewReports;
