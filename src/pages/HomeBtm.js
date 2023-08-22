import React from "react";
import "./HomeBtm.css";
import blue from "./img/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b-removebg-preview.png";

export default function HomeBtm() {
  const data = [
    {
      title: "THE BASICS",
      content: [
        "TMDb에 대해",
        "문의하기",
        "Support Forums",
        "API",
        "System Status",
      ],
    },
    {
      title: "참여하기",
      content: ["기여 지침서", "새 영화 추가", "새 TV 프로그램 추가"],
    },
    {
      title: "커뮤니티",
      content: ["가이드라인", "토론 내역", "기여 랭킹", "Twitter"],
    },
    {
      title: "법적 사항",
      content: ["서비스 이용약관", "API Terms of Use", "개인정보약관", "DMCA"],
    },
  ];

  return (
    <div className="H-btm-container">
      <div className="H-box">
        <div className="H-btm-section">
          <div className="grid-container">
            <div>
              <img src={blue} alt="" />
              <div className="H-btm-text">
                <span>안녕하세요.1234!</span>
              </div>
            </div>
            {data.map((section, index) => (
              <div key={index} className="H-grid">
                <span>{section.title}</span>
                <ul>
                  {section.content.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
