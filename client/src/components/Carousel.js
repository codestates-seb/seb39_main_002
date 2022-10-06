import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousel = ({ canMake }) => {
  const [data, setData] = useState(canMake);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <Section>
      <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
      {data.map((el, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
            <Link to={`/recipedetail/${el[0]}`}>
                <img src={el[2]} alt="recipe img" className="img" />
            </Link>
            )}
          </div>
        );
      })}
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .img {
    width: 30rem;
    height: 30rem;
    border-radius: 1.5rem;
  }
  .rightarrow {
    position: absolute;
    top: 50%;
    right: 0rem;
    font-size: 2rem;
    color: black;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  .leftarrow {
    position: absolute;
    top: 50%;
    left: 0rem;
    font-size: 2rem;
    color: black;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
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

export default Carousel;
