"use client";

import React, { useState, useEffect } from "react";

export type TopBarProps = {
  onOpenPopup: () => void;
};

const TICKER_ITEMS = [
  {
    label: "HR Software",
    href: "https://hrone.cloud/hr-software",
    text: "What if your 2026 starts with effortless HR? Check out how.",
  },
  {
    label: "Pricing",
    href: "https://hrone.cloud/pricing",
    text: "Curious what smart HR really costs? Check out now.",
  },
  {
    label: "Case Study",
    href: "https://hrone.cloud/case-study",
    text: "2,000+ HR teams leveled up. Ready to catch up?",
  },
];

const TopBar: React.FC<TopBarProps> = ({ onOpenPopup }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TICKER_ITEMS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const item = TICKER_ITEMS[activeIndex];

  return (
    <div className="top-bar">
      <div className="container container_cus">
        <div className="top-bar-main">
          <div className="top-bar-left">
            <div className="top-bar-left-block">
              <div className="news_panel">
                <span>
                  <img
                    src="https://hrone.cloud/wp-content/uploads/2025/10/news-icons.svg"
                    alt=""
                  />
                </span>
                <span>{item.label}</span>
              </div>
              <div className="news_content">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </div>
            </div>
          </div>
          <div className="top-bar-right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.hrone.cloud/login"
              className="login_btn_cus"
            >
              <img
                src="https://content.hrone.cloud/wp-content/uploads/2025/10/login-icon.svg"
                alt=""
              />
              <span>Login</span>
            </a>
            <div className="buttons">
              <a
                href="#"
                className="popnew green-btn"
                data-id=""
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPopup();
                }}
              >
                Get Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
