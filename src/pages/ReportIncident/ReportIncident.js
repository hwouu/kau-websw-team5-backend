// src/pages/ReportIncident/ReportIncident.js
import React from "react";
import Chatbot from "../../components/chatbot/Chatbot";

function ReportIncident() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">신고하기</h1>
      <Chatbot /> {/* Chatbot 컴포넌트를 사용하여 신고 대화 진행 */}
    </div>
  );
}

export default ReportIncident;
