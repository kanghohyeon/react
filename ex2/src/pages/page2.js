import React, { useState } from "react";



function Ex2(){
    let 금고 = "ㄴㄴ";
    const [str, setStr] = useState('');
    function test(n){
        // alert(금고);
        let msg = 0;
        switch(n){
            case 1:
                msg=n*100;
                break;
            case 2:
                msg=n*100;
                break;
            case 3:
                msg=n*100;
                break;    
        }
        setStr(msg.toString()); 
    }
    return (
        <>
        <h2>두번째 화면:{str}</h2>
        <button type="button" onClick={() => test(1)}>변경1</button>
        <button type="button" onClick={() => test(2)}>변경2</button>
        <button type="button" onClick={() => test(3)}>변경3</button>
        </>
    );
}
export default Ex2;