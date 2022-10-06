import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Recommendation({ tokenEmail, canMake }) {
  const [data, setData] = useState(canMake);
  return (
    // Main 대신 빈 냉장고 component를 넣어줘서 진행할 수 있게 해줘야 한다(생긴 후)
    <Main>
      <div className="container">
        <div className="title">
          <h1>
            {tokenEmail.nickname}
            님의 재료로 만들 수 있어요
          </h1>
        </div>
        <div className="lists">
          {/* 아래 내용물들은 레시피 데이터를 사용할 수 있을 때 mapping해서 만든 것을 가정 */}
          {data.map((el) => (
            <div className="list">
              <Link to={`/recipedetail/${el[0]}`}>
                <img src={el[2]}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 90vw;
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    margin-left: 5vw;
  }
  .list {
    height: 300px;
    width: 250px;
    background-color: #d9d9d9;
    margin: 50px;
  }
  img {
    height: 300px;
    width: 250px;
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
`;

export default Recommendation;
