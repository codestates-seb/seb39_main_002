import styled from "styled-components";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <Main>
      <div className="body">
        <div>
          <h1>moving</h1>
          <div>
            <Link to="/1">
              <button className="askQuestion">Signup</button>
            </Link>
            <Link to="/2">
              <button className="askQuestion">2</button>
            </Link>
            <Link to="/3">
              <button className="askQuestion">3</button>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  .body {
    /* background-color: rgba(255, 50, 50, 0.3); */
    border-left: 1px solid #d6d9dc;
    width: 60vw;
  }

  h1 {
    font-size: 27px;
    font-weight: 400;
    margin-left: 20px;
  }

  .askQuestion {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    white-space: nowrap;
    word-spacing: 0px;

    background-color: #0074cc;
    border-radius: 5px;
    color: #ffffff;

    height: 37.8px;
    width: 100px;
    border: 1px solid #ffffff;
    padding: 10px 10px 10px 10px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export default Body;
