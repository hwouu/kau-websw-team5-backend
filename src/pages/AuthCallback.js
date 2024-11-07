// src/pages/AuthCallback.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 authorization code 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // 카카오 토큰 요청
      fetch(`https://kauth.kakao.com/oauth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.REACT_APP_KAKAO_API_KEY,
          redirect_uri: "http://localhost:3000/auth/kakao/callback",
          code: code,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            // 카카오 사용자 정보 요청
            return fetch("https://kapi.kakao.com/v2/user/me", {
              headers: {
                Authorization: `Bearer ${data.access_token}`,
              },
            });
          } else {
            throw new Error("토큰을 가져오지 못했습니다.");
          }
        })
        .then((response) => response.json())
        .then((userData) => {
          console.log("User Data:", userData);
          const userType = userData.kakao_account.email.includes("@admin.com")
            ? "admin"
            : "user";

          // 사용자 유형에 따라 대시보드로 리디렉션
          navigate(userType === "admin" ? "/admin-dashboard" : "/user-dashboard");
        })
        .catch((error) => {
          console.error("인증 오류:", error);
          navigate("/login");
        });
    }
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
}

export default AuthCallback;
