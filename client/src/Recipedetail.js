import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Recipedetail = () => {
  const [data, setData] = useState([
    {
      RCP_NM: "",
      ATT_FILE_NO_MK: "",
      RCP_PARTS_DTLS: "",
      MANUAL01: "",
      MANUAL_IMG01: "",
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
      {data[0].RCP_NM !== "" ? (
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
