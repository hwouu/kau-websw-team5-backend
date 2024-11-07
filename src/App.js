// src/App.js
import React from "react";
import AppRoutes from "./routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <AppRoutes /> {/* 페이지 내용이 여기에 표시됩니다 */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
