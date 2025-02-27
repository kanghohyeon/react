import React from "react";

function Page3() {
    const [vo, setVo] = React.useState({
        name: '',
        email: '',
        tel: ''
    });
    function editVO(e){
       // const {id, value} = e.target; 아래 두 구문을 한줄로
       
        let value = e.target.value;
        let id = e.target.id;
        
        setVo({
            ...vo,
            // ...은 전개연산자로 객체를 복사함 스프레이드 속성
            [id]: value 
            // 중괄호 안의 대괄호는 속성을 의미함 (변수)
        });
       
    }

    return (
        <>
            <div>
                <label>이름:</label>
                <input type="text" name="name" id="name"  onChange={editVO}/>
                <label>이메일:</label>
                <input type="email" name="email" id="email"onChange={editVO} />
                <label>전화번호:</label>
                <input type="tel" name="tel" id="tel" onChange={editVO}/>
            </div>
            <hr/>
            <p>이름:{vo.name}</p>
            <p>이메일:{vo.email}</p>
            <p>전화번호:{vo.tel}</p>

        </>
    );
    }
    export default Page3;