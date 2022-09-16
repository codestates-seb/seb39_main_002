import styled from "styled-components";

function Find() {
  return (
    <Main>
      <div className="container">
        <div className="text">ID / 비밀번호 찾기</div>
        <div className="boxes">
          <div className="box box1">
            <div className="boxTitle">
              <span>ID 찾기</span>
            </div>
            <div>
              <div>
                <span>유저이름</span>
                <input></input>
              </div>
              <div>
                <span>이메일</span>
                <input></input>
              </div>
            </div>
            <div>
              <button>찾기</button>
            </div>
          </div>
          <div className="box box2">
            <div className="boxTitle">
              <span>비밀번호 찾기</span>
            </div>
            <div>
              <div>
                <span>ID</span>
                <input></input>
              </div>
              <div>
                <span>이메일</span>
                <input></input>
              </div>
            </div>
            <div>
              <button>찾기</button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .boxes {
    width: 70vw;
    height: 50vh;
    display: flex;
    justify-content: center;
  }
  .boxTitle {
    width: 30vw;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-left: 2.5vw;
    padding-bottom: 80px;
    border-bottom: #222222 solid 1px;
  }
  .box {
    width: 35vw;
    height: 50vh;
    border-radius: 10px;
  }
  .box1 {
    background-color: #e4e4e4;
  }
  .box2 {
    color: #e9e9e9;
    background-color: #222222;
  }
`;

export default Find;
