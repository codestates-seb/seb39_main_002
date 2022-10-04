import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Fooddetail({ data, setData, tokenEmail, setChanged, changed }) {
  const { id } = useParams();
  const [here, SetHere] = useState(
    ...data.filter((el) => el.id === Number(id))
  );
  const [title, setTitle] = useState(here["foodName"]);
  const [tag, setTag] = useState(here["foodClassification"]);
  const [quantity, setQuantity] = useState(here["quantity"]);
  const [date, setDate] = useState(here["shelfLife"]);
  function titleHandler(e) {
    setTitle(e.target.value);
  }
  function tagHandler(e) {
    setTag(e.target.textContent);
  }
  function quantityHandler(e) {
    setQuantity(e.target.value);
  }
  function dateHandler(e) {
    setDate(e.target.value);
  }
  function dataHandler(e) {
    if (e.target.textContent === "냉동실로 옮기기") {
      //냉장실 id 삭제
      //냉동실에 post
      axios({
        method: "delete",
        url: `https://factory-kms.com/v1/foods/${tokenEmail.email}/${id}`,
        headers: {
          Authorization: tokenEmail.token,
        },
      });
      axios({
        method: "post",
        url: `https://factory-kms.com/v1/foods/${tokenEmail.email}`,
        headers: {
          Authorization: tokenEmail.token,
        },
        data: {
          foodName: title,
          foodClassification: tag,
          refrigerator: "FREEZER",
          quantity: quantity,
          shelfLife: date,
        },
      }).then(function (response) {
        if (response.status === 201) {
          setChanged(!changed);
        }
      });
    }
    if (e.target.textContent === "냉장실로 옮기기") {
      //냉동실(현재id) 삭제
      //냉장실 추가
      axios({
        method: "delete",
        url: `https://factory-kms.com/v1/foods/${tokenEmail.email}/${id}`,
        headers: {
          Authorization: tokenEmail.token,
        },
      });
      axios({
        method: "post",
        url: `https://factory-kms.com/v1/foods/${tokenEmail.email}`,
        headers: {
          Authorization: tokenEmail.token,
        },
        data: {
          foodName: title,
          foodClassification: tag,
          refrigerator: "COLD_STORAGE",
          quantity: quantity,
          shelfLife: date,
        },
      }).then(function (response) {
        if (response.status === 201) {
          setChanged(!changed);
        }
      });
    }
    if (e.target.textContent === "수정하기") {
      //현재 id patch로 수정
      axios({
        method: "patch",
        url: `https://factory-kms.com/v1/foods/${tokenEmail.email}/${id}`,
        headers: {
          Authorization: tokenEmail.token,
        },
        data: {
          foodName: title,
          foodClassification: tag,
          refrigerator: here.refrigerator,
          quantity: quantity,
          shelfLife: date,
        },
      }).then(function (response) {
        if (response.status === 200) {
          setChanged(!changed);
        }
      });
    }
  }

  function goBack() {
    window.history.back();
  }
  return (
    <Main onClick={goBack}>
      <div className="container" onClick={(event) => event.stopPropagation()}>
        <div>
          <div className="title">
            <div className="titleButton">
              <input
                placeholder="재료를 입력해주세요"
                value={title}
                onChange={titleHandler}
              />
              <button onClick={goBack}>x</button>
            </div>
            <h1> </h1>
          </div>
        </div>
        <div>
          <div className="tagText">
            <h2>분류</h2>
          </div>
          <div className="tagBox">
            <div
              className={"tag" + " " + (tag === "육류" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              육류
            </div>
            <div
              className={"tag" + " " + (tag === "해산물" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              해산물
            </div>
            <div
              className={"tag" + " " + (tag === "채소/야채" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              채소/야채
            </div>
            <div
              className={"tag" + " " + (tag === "과일" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              과일
            </div>
            <div
              className={"tag" + " " + (tag === "유제품" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              유제품
            </div>
            <div
              className={"tag" + " " + (tag === "음료" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              음료
            </div>
            <div
              className={"tag" + " " + (tag === "가공품" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              가공품
            </div>
            <div
              className={"tag" + " " + (tag === "완제품" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              완제품
            </div>
            <div
              className={"tag" + " " + (tag === "조미료/양념" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              조미료/양념
            </div>
            <div
              className={"tag" + " " + (tag === "기타" ? "tagNow" : "")}
              onClick={tagHandler}
            >
              기타
            </div>
          </div>
        </div>
        <div className="datas">
          <div className="data">
            <h2>수량</h2>
            <input value={quantity} onChange={quantityHandler}></input>
          </div>
          <div className="data">
            <h2>유통기한</h2>
            <input
              type="date"
              min="2022-09-19"
              max="2030-12-31"
              value={date}
              onChange={dateHandler}
            ></input>
          </div>
          {/* <div className="data">
            <h2>소비기한</h2>
            <input></input>
          </div> */}
        </div>
        <div className="bottomLink">
          <Link
            to="/refrigerator"
            className="bottomButton"
            onClick={dataHandler}
          >
            {here.refrigerator === "COLD_STORAGE" ? (
              <div>냉동실로 옮기기</div>
            ) : (
              <div>냉장실로 옮기기</div>
            )}
          </Link>
          <Link
            to="/refrigerator"
            className="bottomButton"
            onClick={dataHandler}
          >
            {" "}
            <div>수정하기</div>
          </Link>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  height: 92.6vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .container {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
    width: 40vw;
    min-width: 720px;
    background-color: #ffa249;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  input:focus {
    outline: none;
  }
  .title {
    width: 32vw;
    min-width: 570px;
    input {
      width: 250px;
      height: 40px;
      margin-top: 90px;
      border: none;
      background-color: #ffeddc;
      color: #ffa249;
      border-radius: 10px;
      padding: 5px;
      font-size: 22px;
      font-weight: bold;
      padding-left: 15px;
      margin-bottom: 20px;
    }
    input::placeholder {
      color: #ffa249;
      font-size: 22px;
      font-weight: bold;
    }
    h1::after {
      content: "";
      display: block;
      width: 200px;
      border-bottom: 3px solid white;
      margin: 30px auto;
    }
  }
  .titleButton {
    display: flex;
    justify-content: space-between;
    button {
      color: white;
      background-color: #ffa249;
      border: white 1px solid;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 25px;
      font-weight: bold;
      margin-top: 50px;
    }
  }
  .tagText {
    width: 28vw;
    h2 {
      margin-bottom: 10px;
    }
  }
  .tagBox {
    width: 28vw;
    min-width: 500px;
    max-width: 570px;
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    width: 80px;
    height: 40px;
    margin: 10px;
    font-weight: bold;
    font-size: 15px;
    color: #ff7a00;
    background-color: #ffd6af;
    border-radius: 30px;
    text-align: center;
    line-height: 40px;
  }
  .tagNow {
    background-color: white;
  }
  .datas {
    justify-content: center;
    width: 28vw;
    min-width: 500px;
    /* display: flex;
  flex-direction: column; */
  }
  .data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      height: 40px;
      width: 240px;
      border-radius: 7px;
      border: none;
      margin-right: 100px;
      background-color: #ffeddc;
      color: #ffa249;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .bottomLink {
    display: flex;
    a {
      text-decoration: none;
    }
    a:visited {
      color: #ffa249;
    }
  }
  .bottomButton {
    div {
      width: 170px;
      height: 50px;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ff881b;
      background-color: #ffffff;
      padding: 5px;
      margin: 50px 15px 0 15px;
      border-radius: 10px;
    }
  }
`;

export default Fooddetail;
