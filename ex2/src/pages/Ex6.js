import React, { useState } from "react";
import styles from "../css/Ex6.module.css"
import data from "../data/data.json"
import Ex6_table from "./Ex6_table";

function Ex6(){
    /*eslint-disable*/
    const [id,setId] = useState(1);
    function updateId(e){
        setId(e.target.value);

    }

    return(
        <div>
            <ul className="{styles.m_list}">
                {
                    // 데이터 서브젝트를 반복문으로 뽑은 값을 서브에 담는다
                    data.suject.map(sub => ( 
                        <li key={sub.id} onClick={updateId} value={sub.id}>{sub.title} </li>

                    ))
                }
            </ul>
            <Ex6_table idx={id}/>
            {/* 내가 선택한 것의 값이 const 값에 들어가니까 그냥 id라고 넣어주면 된다. */}
        </div>
    );
}
export default Ex6;