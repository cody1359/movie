/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="err-title">해당 페이지를 찾지 못했습니다.</div>
      <div className="err-message">
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </div>
      <div className="main" onClick={() => navigate("/")}>
        메인 페이지로 이동
      </div>
    </div>
  );
}
