import React, { useState } from "react";
import Ex5_sub from "./page5_sub";

function Ex5(data){ // 데이터는 프로퍼티즈라고 하며 인자라고 이해하면 된다.
    // 프로퍼티즈는 이 컴포넌트 내에서 변경할 수 없다.
    // data-year= 2000; 이런 것을 할 수 없다.

    const[title,setTitle] = useState(data.str);
    const[year,setYear] = useState(data.year);

    // function test(){
    //     setTitle("오경주");
    // }
    return(

        <>
            <p>{title}({year})</p>
            <Ex5_sub year={year}/>
            <button type="button" onClick={() =>{
             {/* 익명 함수 영역*/}  
             setTitle(title != "오경주"?"오경주":"");
             setYear(year+1);
            }}>변경</button>
          
        </>
    );
}
export default Ex5;