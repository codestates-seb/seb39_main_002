import main from "./img/메인1.jpeg";
import main2 from "./img/메인2.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const scrollDown = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
};

const Main = ({ recipe }) => {
  const data = recipe.map((el, index) => [index, el.RCP_NM]);
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(data);

  const handleInputChange = (event) => {
    if (event.target.value.length !== 0) {
      setInputValue(event.target.value);
      setHasText(true);
      setOptions(
        data
          .filter((el) => el[1].indexOf(event.target.value) !== -1)
          .slice(0, 15)
      );
    } else {
      setInputValue(event.target.value);
      setHasText(false);
      setOptions(
        data
          .filter((el) => el[1].indexOf(event.target.value) !== -1)
          .slice(0, 15)
      );
    }
  };

  const handleDropDownClick = (event) => {
    setInputValue(event);
    setOptions(data.filter((el) => el[1].indexOf(event) !== -1));
  };
  const handleDeleteButtonClick = () => {
    setInputValue("");
  };

  return (
    <Div>
      <div className="background1">
        <div className="blackbox">
          <p onClick={scrollDown} className="text2">
            레시피만 둘러볼래요
          </p>
          <Link to="/login">
            <p className="text1">로그인하고 냉장고 관리하기</p>
          </Link>
        </div>
      </div>
      <div className="background2">
        <div className="inputWrapper">
          <input
            className="searchbar"
            type="search"
            placeholder="레시피를 검색해보세요"
            value={inputValue}
            onChange={handleInputChange}
          />
          {hasText === true && options.length > 0 ? (
            <DropDown options={options} handleComboBox={handleDropDownClick} />
          ) : null}
        </div>
      </div>
    </Div>
  );
};
export const DropDown = ({ options, handleComboBox }) => {
  return (
    <DropDownContainer>
      {/* TODO : input 값에 맞는 autocomplete 선택 옵션이 보여지는 역할을 합니다. */}
      {options.map((el) => (
        <li key={el[0]}>
          <Link to={`/recipedetail/${el[0]}`}>{el[1]}</Link>
        </li>
      ))}
    </DropDownContainer>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .background1 {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${main});
  }
  .background2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${main2});
    .inputWrapper {
      position: static;
    }
  }
  .blackbox {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .text1,
  .text2 {
    padding-bottom: 3rem;
    margin: 0;
    text-align: center;
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
  }
  .text2 {
    padding-bottom: 8rem;
  }
  .searchbar {
    width: 30rem;
    height: 2.5rem;
    padding-left: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
  }
`;
export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  z-index: 3;

  > li {
    padding: 0 1rem;
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
export default Main;
