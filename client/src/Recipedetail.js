import axios from "axios";
import { useEffect, useState } from "react";

const Recipedetail = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3002/COOKRCP01",
    }).then(function (response) {
      setData(response.data.row);           
    });
  }, []);    
  

//   let newData = data //객체 뜯어서 배열로 바꾸기
  
//   for(let i = 0 ; i < newData.length ; i++){
//       for(let key in newData[i]){
//           if(newData[i][key] === ""){
//               delete newData[i][key]
//           }
//       }
//   }  
 
    
    return ( 
        <div>
            {data !== null ? (
            <div>
                <div className="name">{data[0].RCP_NM}</div>
                <img className="mainimg" src={data[0].ATT_FILE_NO_MK}></img>
                <p className="head">재료</p>
                <p className="ingred">{data[0].RCP_PARTS_DTLS}</p>
                <p className="head">만들기</p>
            </div>
            ) : (
                ""
                )}
        </div>
    );
}
 
export default Recipedetail;