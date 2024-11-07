// src/pages/LoginPage/LoginPage.js
import React, { useEffect } from "react";

function LoginPage() {
  const kakaoLogin = () => {
    if (!window.Kakao) return; // SDK가 로드되지 않은 경우 처리
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/auth/kakao/callback", // Redirect URI 설정
    });
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
      <button
        onClick={kakaoLogin}
        className="bg-yellow-300 text-black py-2 px-4 rounded-md"
      >
        카카오로 로그인하기
      </button>
    </div>
  );
}

export default LoginPage;
