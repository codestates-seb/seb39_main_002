import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import freezer from "./img/냉동실.jpeg";
import colder from "./img/냉장실.jpeg";
import { AiOutlinePlus } from "react-icons/ai";

function Refrigerator({ data, setData, tokenEmail }) {
  function deleteList(id) {
    axios({
      method: "delete",
      // url: "http://localhost:3001/data",
      url: `http://ec2-3-36-5-78.ap-northeast-2.compute.amazonaws.com:8080/v1/foods/${tokenEmail.email}/${id}`,
      headers: {
        Authorization: tokenEmail.token,
      },
    }).then(function (response) {
      if (response.status === 204) {
        setData(data.filter((el) => el.id !== id));
      }
    });
  }
  return (
    <Main>
      <div className="container">
        <div className="top">
          <div className="blackbox1">
            <div>
              <h1>
                {tokenEmail.nickname === ""
                  ? "Jay님의 냉장고"
                  : tokenEmail.nickname}
              </h1>
            </div>
            <div className="texts">
              <span>냉동실</span>
              <Link to="/freezer">따로 관리하기→</Link>
            </div>
            <div className="listsBox">
              {data !== null ? (
                <div className="lists">
                  {data
                    .filter((el) => el.refrigerator === "FREEZER")
                    .map((el) => (
                      <div key={el.id} className="list">
                        <Link to={`/fooddetail/${el.id}/freezer`}>
                          {el.foodName}
                        </Link>
                        <button
                          onClick={() => {
                            deleteList(el.id);
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
        </div>
        <div className="bottom">
          <div className="blackbox2">
            <div className="texts">
              <span>냉장실</span>
              <Link to="/colder">따로 관리하기→</Link>
            </div>
            <div className="listsBox">
              {data !== null ? (
                <div className="lists">
                  {data
                    .filter((el) => el.refrigerator === "COLD_STORAGE")
                    .map((el) => (
                      <div key={el.id} className="list">
                        <Link to={`/fooddetail/${el.id}/colder`}>
                          {el.foodName}
                        </Link>
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
            <div className="buttoncontainer">
              <Link to="/recommendation">
                <div className="bottomButton">레시피 추천받기</div>
              </Link>
              <Link to="/addfood">
                <div className="bottomButton">
                  <p>재료 추가하기</p>
                  <AiOutlinePlus size="20" className="plusicon" />
                </div>
              </Link>
            </div>
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${freezer});
  }
  .bottom {
    height: 46.3vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${colder});
  }
  .blackbox1 {
    height: 46.3vh;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .blackbox2 {
    height: 46.3vh;
    background-color: rgba(0, 0, 0, 0.4);
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
  .buttoncontainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottomButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #ff881b;
    font-weight: bold;
    width: 10rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    text-align: center;
    align-items: center;
    background-color: white;
  }
  .plusicon {
    padding-left: 0.5rem;
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
