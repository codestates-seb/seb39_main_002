import styled from "styled-components";

function Mypage() {
  return (
    <Main>
      <div className="container">
        <div className="text">내 정보 관리하기</div>
        <div className="boxes">
          <div className="box box1">왼쪽에 이미지 넣어주기</div>
          <div className="box box2">
            <div className="boxTitle">
              <span>유저 이름</span>
              <input></input>
            </div>
            <div>
              <div>
                <span>이메일</span>
                <input></input>
              </div>
              <div>
                <span>비밀번호</span>
                <input></input>
              </div>
            </div>
            <div>
              <button>수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    .text {
      font-size: 27px;
      font-weight: bold;
      margin-bottom: 20px;
      padding-bottom: 50px;
      border-bottom: black solid 2px;
    }
  }
  .boxes {
    width: 65vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .box {
    height: 35vh;
    border-radius: 10px;
  }
  .box1 {
    width: 15vw;
  }
  .box2 {
    width: 50vw;
    border-radius: 10px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    background-color: #ebebeb;
  }
`;

export default Mypage;
