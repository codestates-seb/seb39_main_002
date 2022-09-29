import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Recipedetail = () => {
  const [data, setData] = useState([
    {
      RCP_PARTS_DTLS:
        "새우두부계란찜\n연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술)\n고명\n시금치 10g(3줄기)",
      RCP_WAY2: "찌기",
      MANUAL_IMG20: "",
      MANUAL20: "",
      RCP_SEQ: "28",
      INFO_NA: "99",
      INFO_WGT: "",
      INFO_PRO: "14",
      MANUAL_IMG13: "",
      MANUAL_IMG14: "",
      MANUAL_IMG15: "",
      MANUAL_IMG16: "",
      MANUAL_IMG10: "",
      MANUAL_IMG11: "",
      MANUAL_IMG12: "",
      MANUAL_IMG17: "",
      MANUAL_IMG18: "",
      MANUAL_IMG19: "",
      INFO_FAT: "17",
      HASH_TAG: "연두부",
      MANUAL_IMG02:
        "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png",
      MANUAL_IMG03:
        "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_3.png",
      RCP_PAT2: "반찬",
      MANUAL_IMG04: "",
      MANUAL_IMG05: "",
      MANUAL_IMG01:
        "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_1.png",
      MANUAL01: "1. 손질된 새우를 끓는 물에 데쳐 건진다.a",
      ATT_FILE_NO_MK:
        "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png",
      MANUAL_IMG06: "",
      MANUAL_IMG07: "",
      MANUAL_IMG08: "",
      MANUAL_IMG09: "",
      MANUAL08: "",
      MANUAL09: "",
      MANUAL06: "",
      MANUAL07: "",
      MANUAL04: "",
      MANUAL05: "",
      MANUAL02: "123123릇에 담는다.b",
      MANUAL03:
        "3. 시금치를 잘게 다져 혼합물 그릇(2)에 뿌리고 찜기에 넣고 중간 불에서 10분 정도 찐다.c",
      ATT_FILE_NO_MAIN:
        "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png",
      MANUAL11: "",
      MANUAL12: "",
      MANUAL10: "",
      INFO_CAR: "3",
      MANUAL19: "",
      INFO_ENG: "220",
      MANUAL17: "",
      MANUAL18: "",
      RCP_NM: "123124235235",
      MANUAL15: "",
      MANUAL16: "",
      MANUAL13: "",
      MANUAL14: "",
    },
  ]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3002/COOKRCP01",
    }).then(function (response) {
      setData(response.data.row.filter((el) => el.RCP_SEQ === "636"));
    });
  }, []);

  let list = [];
  for (let i = 1; i < 10; i++) {
    if (data[0]["MANUAL_IMG0" + i] === "" && data[0]["MANUAL0" + i] === "") {
      break;
    }
    if (data[0]["MANUAL_IMG0" + i] !== "") {
      list.push(data[0]["MANUAL_IMG0" + i]);
    }
    if (data[0]["MANUAL0" + i] !== "") {
      list.push(data[0]["MANUAL0" + i]);
    }
  }

  return (
    <div>
      {data !== null ? (
        <Div>
          <div className="name">{data[0].RCP_NM}</div>
          <img className="mainimg" src={data[0].ATT_FILE_NO_MK}></img>
          <p className="head">재료</p>
          <p className="ingred">{data[0].RCP_PARTS_DTLS}</p>
          <p className="head">만들기</p>
          {list.map((el) =>
            el.slice(-3) === "png" ? (
              <img key={list.indexOf(el)} className="orderimg" src={el}></img>
            ) : (
              <p key={list.indexOf(el)} className="ordertext">
                {el}
              </p>
            )
          )}
        </Div>
      ) : (
        ""
      )}
    </div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .name {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 4rem 0rem 4rem 0rem;
  }
  .mainimg {
    width: 30rem;
    max-height: 30rem;
  }
  .head {
    font-size: 2rem;
    font-weight: 600;
    margin: 4rem 0rem 4rem 0rem;
  }
  .ingred {
    font-size: 1.3rem;
    max-width: 30rem;
    letter-spacing: 0.05rem;
  }
  .orderimg {
    width: 16rem;
  }
  .ordertext {
    margin: 2rem 0rem 2rem 0rem;
    max-width: 16rem;
  }
`;

export default Recipedetail;
