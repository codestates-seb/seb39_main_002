import styled from "styled-components";
import loginmain from "./img/로그인메인1.jpeg"
import freezer from "./img/냉동실.jpeg";
import colder from "./img/냉장실.jpeg"
import { Link } from "react-router-dom";

const Loginmain = () => {
  return (
    <Container>
      <Div>
          <div className="background1">
              <div className="blackbox1">
                  <Link to="/refrigerator">                    
                  <p className="text1">손쉽게 냉장고 관리하고<br></br>레시피 추천받기</p>
                  </Link>
              </div>
          </div>
          <div className="background23">          
            <div className="background2">
              <div className="blackbox2">
                  <Link to="/freezer">
                  <p className="text23">냉동실 관리하기</p>
                  </Link>
              </div>                          
            </div>
            <div className="background3">
              <div className="blackbox3">
                <Link to="/colder">
                <p className="text23">냉장실 관리하기</p>
                </Link>
              </div>  
            </div>        
          </div>        
      </Div>
      <div className="content">
        <p className="text4">Jay님의 추천 레시피</p>  
      </div>   
          
    </Container>
  )
}

const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 200vh;

  .content {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;    
  }
`

const Div = styled.div`

  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh; 

  .background23 {
    display: flex;
    flex-direction: column;
  }

    .background1 {
        width: 50vw;
        height: 100vh;        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${loginmain});                   
    }
    .background2 {
        width: 50vw;
        height: 50vh;        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${freezer});                   
    } 
    .background3 {
        width: 50vw;
        height: 50vh;        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${colder});                   
    }
    .blackbox1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
        height: 100vh;  
        background-color: rgba(0, 0, 0, 0.4);             
    }
    .blackbox2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
        height: 50vh;  
        background-color: rgba(0, 0, 0, 0.6);             
    }
    .blackbox3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
        height: 50vh;  
        background-color: rgba(0, 0, 0, 0.5);             
    }
    .text1{        
        margin: 0;        
        text-align: center;
        color: white;
        font-size: 2.1rem;
        font-weight: 600;
        line-height: 3rem;     
    }
    .text23 {
        margin: 0;        
        text-align: center;
        color: white;
        font-size: 1.7rem;
        font-weight: 600;
      }

`;
 
export default Loginmain;