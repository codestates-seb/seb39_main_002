import main from "./img/메인1.jpeg"
import main2 from "./img/메인2.jpeg"
import styled from "styled-components";
import { Link } from "react-router-dom";



const scrollDown = () => {
    window.scrollTo({top:document.body.scrollHeight,left:0,behavior:'smooth'});
}

const Main = () => {
    return (
        <Div>
            <div className="background1">
                <div className="blackbox">
                    
                    <p onClick={scrollDown} className="text2">레시피만 둘러볼래요</p>
                    <Link to="/login">
                        <p className="text1">로그인하고 냉장고 관리하기</p>
                    </Link>                              
                </div>
            </div>
            <div className="background2">
                <input className="searchbar" type="search" placeholder="레시피를 검색해보세요" />             
            </div>         
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;      
    align-items: center;
    width: 100vw;
    height: 200vh;
    
    .background1 {    
        width: 100vw;
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
        width: 100vw;
        height: 100vh;  
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;         
        background-image: url(${main2}); 
    }
    .blackbox {     
        display: flex;
        flex-direction: column-reverse;        
        width: 100vw;
        height: 100vh;  
        background-color: rgba(0, 0, 0, 0.3);             
    }
    .text1, .text2 {   
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

 
export default Main;