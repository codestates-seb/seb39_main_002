import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Fooddetail({ place, data, setData }) {
  const { id } = useParams();
  const [here, SetHere] = useState(
    ...data[place].filter((el) => el.id === Number(id))
  );
  const [title, setTitle] = useState(here["name"]);
  const [tag, setTag] = useState(here["type"]);
  const [quantity, setQuantity] = useState(here["quantity"]);
  const [date, setDate] = useState(here["expirydate"]);
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
  function dataHandler() {
    let newData = {
      id: Number(id),
      name: title,
      type: tag,
      quantity: quantity,
      expirydate: date,
    };
    let idx = data[place].indexOf(here);
    let DATA = [...data[place]];
    DATA.splice(idx, 1, newData);
    if (place === "colder") {
      setData({
        freezer: data["freezer"],
        colder: DATA,
        colderLast: data["colderLast"],
        freezerLast: data["freezerLast"],
      });
    } else if (place === "freezer") {
      setData({
        freezer: DATA,
        colder: data["colder"],
        colderLast: data["colderLast"],
        freezerLast: data["freezerLast"],
      });
    }
  }
  function dataMoveHander() {
    let DATA = data[place].filter((el) => el.id !== Number(id));
    if (place === "colder") {
      let newData = {
        id: data["freezerLast"] + 1,
        name: title,
        type: tag,
        quantity: quantity,
        expirydate: date,
      };
      setData({
        freezer: [...data["freezer"], newData],
        colder: DATA,
        colderLast: data["colderLast"],
        freezerLast: data["freezerLast"] + 1,
      });
    } else if (place === "freezer") {
      let newData = {
        id: data["colderLast"] + 1,
        name: title,
        type: tag,
        quantity: quantity,
        expirydate: date,
      };
      setData({
        freezer: DATA,
        colder: [...data["colder"], newData],
        colderLast: data["colderLast"] + 1,
        freezerLast: data["freezerLast"],
      });
    }
  }
  return (
    <Main>
      <div className="container">
        <div>
          <div className="title">
            <input
              placeholder="재료를 입력해주세요"
              value={title}
              onChange={titleHandler}
            />
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
            // to={`/${place === "colder" ? "freezer" : "colder"}`}여기도 고려
            to="/refrigerator"
            className="bottomButton"
            onClick={dataMoveHander}
          >
            {place === "colder" ? "냉동실로 옮기기" : "냉장실로 옮기기"}
          </Link>
          <Link
            // to={`/${place}`} 이건 고려해야할 것 같다(다 볼 수 없으니)
            to="/refrigerator"
            className="bottomButton"
            onClick={dataHandler}
          >
            수정하기
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
    background-color: #ffa249;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  input:focus {
    outline: none;
  }
  .title {
    width: 32vw;
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
  .tagText {
    width: 28vw;
    h2 {
      margin-bottom: 10px;
    }
  }
  .tagBox {
    width: 28vw;
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
    a {
      color: #ffa249;
      background-color: #ffeddc;
      text-decoration: none;
      padding: 5px;
      margin: 5px;
    }
    a:visited {
      color: #ffa249;
    }
  }
`;

export default Fooddetail;
