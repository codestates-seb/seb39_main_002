import styled from "styled-components";
import { Link } from "react-router-dom";

function Recommendation({ tokenEmail, canMake }) {
  return (
    <Main>
      <div className="container">
        <div className="title">
          <h1>
            {tokenEmail.nickname}
            님의 재료로 만들 수 있어요
          </h1>
        </div>
        <div className="lists">
          {canMake.map((el) => (
            <div className="list">
              <Link to={`/recipedetail/${el[0]}`}>
                <img src={el[2]} alt="main_img"></img>
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
