import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
function Fooddetail({ place }) {
  const { id } = useParams();
  return (
    <Main>
      재료조회 id = {id} , place = {place}
    </Main>
  );
}

export const Main = styled.div``;

export default Fooddetail;
