import { useClerk } from "@clerk/clerk-react";

const SignedUpButton = () => {
  const { openSignUp } = useClerk();

  return (
    <>
      <button className="c-button c-button--gooey" onClick={() => openSignUp()}>
        Sign Up
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "block", height: 0, width: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <style>{`
        .c-button {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          padding: 0.6em 1.4em;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          position: relative;
          z-index: 1;
          background-color: transparent;
        }

        .c-button--gooey {
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          border: 2px solid #1DA1F0;
          border-radius: 0;
          position: relative;
          transition: all 700ms ease;
          background-color: transparent;
        }

        .c-button--gooey .c-button__blobs {
          height: 100%;
          filter: url(#goo);
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          bottom: -3px;
          right: -1px;
          z-index: -1;
        }

        .c-button--gooey .c-button__blobs div {
          background-color: #1DA1F0;
          width: 34%;
          height: 100%;
          border-radius: 100%;
          position: absolute;
          transform: scale(1.4) translateY(0) translateZ(0);
          transition: all 700ms ease;
        }

        .c-button--gooey .c-button__blobs div:nth-child(1) {
          left: -5%;
        }

        .c-button--gooey .c-button__blobs div:nth-child(2) {
          left: 30%;
          transition-delay: 60ms;
        }

        .c-button--gooey .c-button__blobs div:nth-child(3) {
          left: 66%;
          transition-delay: 25ms;
        }

        .c-button--gooey:hover {
          color: #1DA1F0;
        }

        .c-button--gooey:hover .c-button__blobs div {
          transform: scale(1.4) translateY(125%) translateZ(0);
        }
      `}</style>
    </>
  );
};

export default SignedUpButton;
