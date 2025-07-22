import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .cta {
        position: relative;
        margin: auto;
        padding: 11.5px 18px;
        transition: all 0.2s ease;
        border: 3px solid #0696D9;
        border-radius: 50px;
        background: #0696D9;
        cursor: pointer;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .cta::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: block;
        border-radius: 50px;
        background: white;
        width: 45px;
        height: 45px;
        transition: all 0.8s ease;
        z-index: 0;
      }

      .cta span {
        position: relative;
        font-family: Montserrat, sans-serif;
        font-size: 18px;
        color: white;
        font-weight: 600;
        letter-spacing: 0.05em;
        z-index: 1;
      }

      .cta svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: white;
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.5s ease;
        z-index: 1;
      }

      .cta:hover::before {
        width: 100%;
        height: 60px;
        background: #1c1c1c;
      }

      .cta:hover svg {
        transform: translateX(0);
        transition: all 2s ease;
      }

      .cta:active {
        transform: scale(0.95);
        transition: all 0.2s ease;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button className="cta" onClick={handleClick}>
      <span>Contact Us&nbsp;</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
};

export default ContactButton;
