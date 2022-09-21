import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import freezer from "./img/냉동실.jpeg";
import colder from "./img/냉장실.jpeg"
import { AiOutlinePlus } from "react-icons/ai";

function Refrigerator({ data, setData }) {
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
          <div className="blackbox1">
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
            <div className="buttoncontainer">
              <Link to="/recommendation" >
                <div className="bottomButton">레시피 추천받기</div>
              </Link>
              <Link to="/addfood">
                <div className="bottomButton">
                  <p>재료 추가하기</p>
                  <AiOutlinePlus size="20" className="plusicon"/>
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
    color:#FF881B;   
    font-weight: bold;
    width: 10rem;
    height: 2.5rem;
    border-radius: 0.5rem;   
    text-align: center;
    align-items: center;
    background-color: white;    
  }
  .plusicon{
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
