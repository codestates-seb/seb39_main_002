import { useState } from "react";
import styled from "styled-components";

// export const ModalBackdrop = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: rgba(255, 255, 255, 0.25);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(1.5px);
//   -webkit-backdrop-filter: blur(1.5px);
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
// `;

// export const ModalView = styled.div.attrs((props) => ({
//   role: "dialog",
// }))`
//   background: white;
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   width: 400px;
//   height: 500px;
//   position: relative;
//   top: -100px;
//   padding: 10px;
// `;

function Memo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Main>
        <span className="modalBtn" onClick={openModalHandler}>
          메모
        </span>
        {isOpen === true ? (
          <div className="background" onClick={openModalHandler}>
            <div
              className="modalview"
              onClick={(event) => event.stopPropagation()}
            >
              내용물 채우기
            </div>
          </div>
        ) : (
          ""
        )}
      </Main>
    </>
  );
}
export const Main = styled.span`
  .modalBtn {
    font-size: 28px;
    font-weight: 500;
    color: white;
  }
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .modalview {
    background: #ecc600;
    box-shadow: 0 8px 32px 0 rgba(30, 30, 30, 1);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 400px;
    height: 500px;
    position: relative;
    top: -100px;
    padding: 10px;
  }
`;

export default Memo;
