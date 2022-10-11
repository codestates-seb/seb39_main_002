import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Memo() {
  const [isOpen, setIsOpen] = useState(false);
  const [memos, setMemos] = useState([
    {
      data: "메모1",
      id: 1,
    },
  ]);
  const [change, setChange] = useState(true);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (localStorage.getItem("localToken")) {
      axios({
        method: "get",
        url: `https://factory-kms.com/v1/notepad/${localStorage.getItem(
          "email"
        )}`,
        headers: {
          Authorization: localStorage.getItem("localToken"),
        },
      }).then(function (response) {
        setMemos(response.data.data);
      });
    }
  }, [change]);

  function enterKeyHandler(e) {
    if (e.key === "Enter") {
      axios({
        method: "post",
        url: `https://factory-kms.com/v1/notepad/${localStorage.getItem(
          "email"
        )}`,
        headers: {
          Authorization: localStorage.getItem("localToken"),
        },
        data: {
          contents: e.target.value,
        },
      }).then(function (response) {
        setChange(!change);
      });
      e.target.value = "";
    }
  }

  function memoDelete(e) {
    axios({
      method: "delete",
      url:
        `https://factory-kms.com/v1/notepad/${localStorage.getItem("email")}/` +
        e.target.id,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    }).then(function (response) {
      setChange(!change);
    });
  }

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
              <div className="memos">
                {memos.map((el) => (
                  <div key={el.id} className="memobox">
                    <span className="memo">{el.contents}</span>
                    <button id={el.id} onClick={memoDelete}>
                      x
                    </button>
                  </div>
                ))}
              </div>
              <input
                placeholder="추가할 메모를 입력해주세요"
                onKeyUp={enterKeyHandler}
              />
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
    width: 99.9vw;
    height: 99vh;
    overflow: hidden;
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
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .modalview {
    background: #ecc600;
    box-shadow: 0 8px 32px 0 rgba(30, 30, 30, 1);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 80vw;
    max-width: 900px;
    height: 60vh;
    max-height: 600px;
    position: relative;
    top: -50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .memos {
      margin-top: 20px;
    }
    .memobox {
      margin-top: 10px;
      font-size: 20px;
      padding: 0 30px 0 30px;
      span {
        padding: 0;
      }
      button {
        margin-left: 5px;
        background-color: #ecc600;
        border: none;
        font-size: 20px;
        font-weight: 900;
      }
    }
    input {
      margin: 40px;
      height: 40px;
      border: none;
      padding: 10px 10px 10px 20px;
      font-size: 20px;
      font-weight: bold;
    }
    input::placeholder {
      color: gray;
    }
    input:focus {
      outline: none;
    }
  }
`;

export default Memo;
