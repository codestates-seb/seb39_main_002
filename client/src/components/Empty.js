import styled from "styled-components";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";

const Empty = () => {
    return (
        <Div>
            <CgSmartHomeRefrigerator size="300" color="#BCBCBC" />
            <p className="text1">Jay님의 냉장고에<br></br>아직은 재료가 부족하네요</p>
            <Link to="/addfood">
            <div className="text2container">
                <p className="text2">재료 추가하러 가기</p>
                <FaArrowRight size="40" className="icon"/>
            </div>
            </Link>
        </Div>
    );
}

const Div = styled.div`
    padding-top: 8rem;
    width: 100vw;
    height: 100vh;
    display: flex;    
    flex-direction: column;
    align-items: center;    

    .text1 {
        text-align: center;
        color: #BCBCBC;
        font-size: 3.5rem;
        font-weight: bold;
    }
    .text2container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .text2 {        
        font-size: 2.5rem;
        font-weight: bold;
    }
    .icon {
        padding-left: 1rem;
    }
`;
 
export default Empty;