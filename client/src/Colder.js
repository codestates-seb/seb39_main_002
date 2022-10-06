import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colder from "./img/냉장실.jpeg";
import { AiOutlinePlus } from "react-icons/ai";

function Colder({ data, setData, tokenEmail }) {
  function deleteList(id) {
    axios({
      method: "delete",
      // url: "http://localhost:3001/data",
      url: `https://factory-kms.com/v1/foods/${tokenEmail.email}/${id}`,
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
      <div className="blackbox">
        <h1>
          {tokenEmail.nickname === ""
            ? "Jay님의 냉장실"
            : `${tokenEmail.nickname}님의 냉장실`}
        </h1>
        {data !== null ? (
          <div className="container">
            <div className="top">
              <div className="listsBox">
                <div className="lists">
                  {data
                    .filter((el) => el.refrigerator === "COLD_STORAGE")
                    .map((el) => (
                      <div key={el.id} className="list">
                        <Link to={`/fooddetail/${el.id}`}>{el.foodName}</Link>
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
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="buttoncontainer">
          <Link to="/addfood">
            <div className="bottomButton">
              <p>재료 추가하기</p>
              <AiOutlinePlus size="20" className="plusicon" />
            </div>
          </Link>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  background-image: url(${colder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 92.6vh;
  .blackbox {
    height: 92.6vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1 {
    color: white;
    margin: 0;
    padding: 30px 0 0 30px;
  }
  span {
    color: #c1c1c1;
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: #c1c1c1;
  }
  a:visited {
    color: #c1c1c1;
  }
  .buttoncontainer {
    display: flex;
    justify-content: center;
    margin-bottom: 0.7rem;
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

export default Colder;
