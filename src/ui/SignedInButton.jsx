import { useClerk } from "@clerk/clerk-react";

const SignedInButton = () => {
  const { openSignIn } = useClerk();

  return (
    <>
      <button className="signin-btn signin-btn--gooey" onClick={() => openSignIn()}>
        Sign In
        <div className="signin-btn__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "block", height: 0, width: 0 }}>
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
        .signin-btn {
          color: #000;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          padding: 0.6em 1.4em;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          position: relative;
          z-index: 1;
        }

        .signin-btn--gooey {
          color: #1DA1F0;
          text-transform: uppercase;
          letter-spacing: 2px;
          border: 2px solid #1DA1F0;
          border-radius: 0;
          position: relative;
          transition: all 700ms ease;
        }

        .signin-btn--gooey .signin-btn__blobs {
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

        .signin-btn--gooey .signin-btn__blobs div {
          background-color: #1DA1F0;
          width: 34%;
          height: 100%;
          border-radius: 100%;
          position: absolute;
          transform: scale(1.4) translateY(125%) translateZ(0);
          transition: all 700ms ease;
        }

        .signin-btn--gooey .signin-btn__blobs div:nth-child(1) {
          left: -5%;
        }

        .signin-btn--gooey .signin-btn__blobs div:nth-child(2) {
          left: 30%;
          transition-delay: 60ms;
        }

        .signin-btn--gooey .signin-btn__blobs div:nth-child(3) {
          left: 66%;
          transition-delay: 25ms;
        }

        .signin-btn--gooey:hover {
          color: #fff;
        }

        .signin-btn--gooey:hover .signin-btn__blobs div {
          transform: scale(1.4) translateY(0) translateZ(0);
        }
      `}</style>
    </>
  );
};

export default SignedInButton;
