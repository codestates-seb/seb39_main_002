import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Colder({ data, setData }) {
  function deleteList(e, place) {
    setData({
      freezer: data["freezer"],
      colder: data[place].filter((el) => el.id !== e),
      colderLast: data["colderLast"],
      freezerLast: data["freezerLast"],
    });
    //이후 서버에 delete 한 객체를 PUT으로 올리기(json한정)
  }
  return (
    <Main>
      {data !== null ? (
        <div className="container">
          <div className="top">
            <h1>Jay님의 냉장실</h1>
            <div className="listsBox">
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
            </div>
          </div>
          <div>
            <Link to="/addfood" className="bottomButton">
              재료 추가하기 ╋
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </Main>
  );
}

export const Main = styled.div`
  background-color: #2a2525;
  height: 92.6vh;
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

export default Colder;
