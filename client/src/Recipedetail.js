import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipedetail = ({ recipe }) => {
  const { id } = useParams();
  const [data, setData] = useState(recipe[id]);

  // useEffect(() => {
  //   setData(recipe[id]);
  // }, []);

  let list = [];
  for (let i = 1; i < 10; i++) {
    if (data["MANUAL_IMG0" + i] === "" && data["MANUAL0" + i] === "") {
      break;
    }
    if (data["MANUAL_IMG0" + i] !== "") {
      list.push(data["MANUAL_IMG0" + i]);
    }
    if (data["MANUAL0" + i] !== "") {
      list.push(data["MANUAL0" + i]);
    }
  }
  return (
    <div>
      {data.RCP_NM !== "" ? (
        <Div>
          <div className="name">{data.RCP_NM}</div>
          <img className="mainimg" src={data.ATT_FILE_NO_MK}></img>
          <p className="head">재료</p>
          <p className="ingred">{data.RCP_PARTS_DTLS}</p>
          <p className="head">만들기</p>
          {list.map((el) =>
            el.slice(-3) === "png" ||
            el.slice(-3) === "jpg" ||
            el.slice(-3) === "PNG" ||
            el.slice(-3) === "JPG" ? (
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
