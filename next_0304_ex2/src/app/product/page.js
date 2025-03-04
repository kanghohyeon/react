"use client";
import { useState } from "react";

function Product() {
    let ar = [
        { name: "사과", price: "12000", img: "/images/fruit0.png" },
        { name: "파인애플", price: "120200", img: "/images/fruit1.png" },
        { name: "샤인머스켓", price: "12012300", img: "/images/fruit2.png" }
    ];

    const [cnt, setCnt] = useState([0, 0, 0]); // 각 과일의 수량들만 저장한 배열

    // 개별 수량 증가 함수
    const plusCnt = (index) => {
        setCnt((prevCnt) => {
            const newCnt = [...prevCnt]; // 기존 배열을 복사
            newCnt[index] += 1; // 선택한 과일의 수량 증가
            return newCnt; // 새로운 배열로 업데이트
        });
    };
    const minusCnt = (index) => {
        setCnt((prevCnt) => {
            const newCnt = [...prevCnt]; // 기존 배열 복사
            newCnt[index] = Math.max(newCnt[index] - 1, 0); // 0 이하로 내려가지 않도록 처리
            return newCnt; // 새로운 배열 반환
        });
    };
    

    return (
        <div>
            <h1 className="title"> 제품들 </h1>
            <hr />
            {ar.map((item, i) => (
                <div className="box" key={item.name}>
                    <header>
                        <h4>{item.name}</h4>
                        <p>{item.price}원</p>
                        <img src={item.img} alt={item.name} />
                        <p>
                            <span>수량&nbsp;{cnt[i]}개</span>
                        </p>
                        <button onClick={() => plusCnt(i)}>+</button>
                        <button onClick={() => minusCnt(i)}>-</button>
                    </header>
                </div>
            ))}
        </div>
    );
}

export default Product;
