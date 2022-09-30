import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import freezer from "./img/냉동실.jpeg";
import { AiOutlinePlus } from "react-icons/ai";

function Freezer({ data, setData, tokenEmail }) {
  function deleteList(e, place) {
    setData({
      freezer: data[place].filter((el) => el.id !== e),
      colder: data["colder"],
      colderLast: data["colderLast"],
      freezerLast: data["freezerLast"],
    });
    //이후 서버에 delete 한 객체를 PUT으로 올리기(json한정)
  }
  return (
    <Main>
      <div className="blackbox">
        <h1>
          {tokenEmail.nickname === "" ? "Jay님의 냉동실" : tokenEmail.nickname}
        </h1>
        {data !== null ? (
          <div className="container">
            <div className="top">
              <div className="listsBox">
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
  background-image: url(${freezer});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 92.6vh;
  .blackbox {
    height: 92.6vh;
    background-color: rgba(0, 0, 0, 0.6);
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
  a:visited {
    color: #c1c1c1;
  }
  .buttoncontainer {
    display: flex;
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

export default Freezer;
