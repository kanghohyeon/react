import React, { useState } from "react";





function Data({member}){

  
    return(
        <tr>
            <td>{member.num}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
        </tr>
    );
}

function Page4() {

    const [list, setList] = useState([
        {num:"1", email:"test@korea.com" , name:"홍길동"},
        {num:"2", email:"pig@korea.com" , name:"돼지현"},
        {num:"3", email:"north@korea.com" , name:"다니엘"},
        {num:"4", email:"iru@korea.com" , name:"이루치"},
        {num:"5", email:"khh@korea.com" , name:"호현현"}
    ]);


return (
<>
 <table>
    <thead>
        <tr>
            <th>전화번호</th>
            <th>이름</th>
            <th>이메일</th>
        </tr>
    </thead>
    <tbody>
        {/* vo는 리스트에 있는 브레이스 안에 하나 */}
        {list.map(vo => <Data member={vo}/>)}
        {/* 리스트로부터 하나씩 가져와서 vo에 저장한 후 Data라는 함수컴포넌트 를 호출 할 떄
         인자인 member라는 변수에 vo를 담아 전달한다. */}
        {/* 알아서 다 뱉을때까지 돈다 */}
        {/* JSX에서 map은 반복문문 */}
    </tbody>
 </table>
</>

);
}

export default Page4;