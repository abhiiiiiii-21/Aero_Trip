import styled from 'styled-components';

const Button = ({ children, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className="bookmarkBtn">
        <span className="IconContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </span>
        <p className="text">{children}</p>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.bookmarkBtn {
    width: 166px;
    height: 60px;
    border-radius: 60px;
    border: 1px solid rgba(255, 255, 255, 0.349);
    background-color: rgb(12, 12, 12);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
  }
  
  .IconContainer {
    width: 50px;
    height: 50px;
    background: #3289F1;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: 0.3s;
  }
  
  .IconContainer svg {
    transition: transform 0.3s ease;
  }
  
  .text {
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 1;
    transition-duration: 0.3s;
    font-size: 1.04em;
  }
  
  .bookmarkBtn:hover .IconContainer {
    width: 154px;
    transition-duration: 0.3s;
  }
  
  .bookmarkBtn:hover .IconContainer svg {
    transform: rotate(45deg);
  }
  
  .bookmarkBtn:hover .text {
    transform: translate(10px);
    width: 0;
    font-size: 0;
    transition-duration: 0.3s;
  }
  
  .bookmarkBtn:active {
    transform: scale(0.95);
    transition-duration: 0.3s;
  }
`;

export default Button;
