import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Refrigerator({ data, setData }) {
  // const [data, setData] = useState(dataProps);
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:3001/data",
  //   }).then(function (response) {
  //     setData(response.data);
  //   });
  // }, []);
  // useEffect(() => {
  //   setData(dataProps);
  // });
  function deleteList(e, place) {
    if (place === "colder") {
      setData({
        freezer: data["freezer"],
        colder: data[place].filter((el) => el.id !== e),
        colderLast: data["colderLast"],
        freezerLast: data["freezerLast"],
      });
    } else {
      setData({
        freezer: data[place].filter((el) => el.id !== e),
        colder: data["colder"],
        colderLast: data["colderLast"],
        freezerLast: data["freezerLast"],
      });
    }
    //이후 서버에 delete 한 객체를 PUT으로 올리기(json한정)
  }
  return (
    <Main>
      <div className="container">
        <div className="top">
          <div>
            <h1>Jay님의 냉장고</h1>
          </div>
          <div className="texts">
            <span>냉동실</span>
            <Link to="/freezer">따로 관리하기→</Link>
          </div>
          <div className="listsBox">
            {data !== null ? (
              <div className="lists">
                {data.freezer.map((el) => (
                  <div key={el.id} className="list">
                    <Link to={`/fooddetail/${el.id}/freezer`}>{el.name}</Link>
                    <button
                      onClick={() => {
                        deleteList(el.id, "freezer");
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="bottom">
          <div className="texts">
            <span>냉장실</span>
            <Link to="/colder">따로 관리하기→</Link>
          </div>
          <div className="listsBox">
            {data !== null ? (
              <div className="lists">
                {data.colder.map((el) => (
                  <div key={el.id} className="list">
                    <Link to={`/fooddetail/${el.id}/colder`}>{el.name}</Link>
                    <button
                      onClick={() => {
                        deleteList(el.id, "colder");
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <Link to="/recommendation" className="bottomButton">
              레시피 추천받기
            </Link>
            <Link to="/addfood" className="bottomButton">
              재료 추가하기 ╋
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  background-color: #2a2525;
  h1 {
    color: white;
    margin: 0;
    padding: 30px 0 0 30px;
  }
  .top {
    height: 46.3vh;
    background-color: #2a2525;
  }
  .bottom {
    height: 46.3vh;
    background-color: #4d4a4a;
  }

  .texts {
    padding: 30px 0 30px 0;
  }
  span {
    color: #c1c1c1;
    font-size: 20px;
    font-weight: bold;
    margin-left: 50px;
  }
  a {
    margin-left: 10px;
    text-decoration: none;
  }
  a:visited {
    color: #c1c1c1;
  }
  .bottomButton {
    color: #ff881b;
    background-color: white;
    a:visited {
      color: #ff881b;
    }
  }
  .listsBox {
    display: flex;
    justify-content: center;
  }
  .lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
  }
  .list {
    color: white;
    background-color: #ff881b;
    width: 150px;
    height: 50px;
    padding: px;
    margin: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-left: 10px;
      color: white;
      background-color: #ff881b;
      border: white 1px solid;
      border-radius: 50%;
    }
    a {
      color: white;
    }
  }
`;

export default Refrigerator;
