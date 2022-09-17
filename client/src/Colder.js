import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Colder() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/data",
    }).then(function (response) {
      setData(response.data.colder);
    });
  }, [data]);
  return (
    <Main>
      {data !== null ? (
        <div className="container">
          <div className="top">
            <h1>Jay님의 냉장실</h1>
            <div className="lists">
              {data.map((el) => (
                <div key={el.id} className="list">
                  <div>{el.name}</div>
                  <button>x</button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button>재료 추가하기 ╋</button>
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
  }
  .lists {
    display: flex;
  }
  .list {
    color: white;
    background-color: #ff881b;
    width: 150px;
    height: 50px;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-left: 5px;
      color: white;
      background-color: #ff881b;
      border: white 1px solid;
      border-radius: 50%;
    }
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
`;

export default Colder;
