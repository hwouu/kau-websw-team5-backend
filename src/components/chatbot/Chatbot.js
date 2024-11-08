// src/components/chatbot/Chatbot.js
import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { user: true, text: input }]);
    setInput("");

    // 대화 시작 시 UI 변경
    if (!conversationStarted) setConversationStarted(true);

    // 이후 ChatGPT API 호출 로직 추가 가능
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* 왼쪽 패널: 신고 내역 */}
      <aside className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-lg font-semibold mb-4">신고 내역</h2>
        {/* 신고 내역 목록 */}
        <ul>
          <li className="p-2 cursor-pointer hover:bg-gray-700">신고 #1</li>
          <li className="p-2 cursor-pointer hover:bg-gray-700">신고 #2</li>
          {/* 실제 신고 내역 추가 예정 */}
        </ul>
      </aside>

      {/* 대화창 */}
      <main className="flex-1 p-6 flex flex-col justify-between">
        {!conversationStarted ? (
          <div className="text-center text-gray-400">
            <h1 className="text-3xl font-bold mb-4">What can I help with?</h1>
            <p>사고 신고를 시작하려면 메시지를 입력하세요.</p>
          </div>
        ) : (
          <div className="overflow-y-auto mb-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.user ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`inline-block p-3 rounded-lg max-w-xs ${
                    msg.user
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* 메시지 입력 필드 */}
        <div className="flex items-center border-t border-gray-700 p-4">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-3 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSend}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
          >
            전송
          </button>
        </div>
      </main>
    </div>
  );
}

export default Chatbot;
