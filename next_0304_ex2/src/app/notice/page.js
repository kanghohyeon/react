"use client";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Notice(){
    // let ar = [
    //     {title:"안녕하새우",content:"아아",date:"2025-03-02"},
    //     {title:"안녕하문어",content:"아아2",date:"2025-03-022"},
    //     {title:"안녕하조개",content:"아아3",date:"2025-03-0232"},
    // ];
    const [ar,setAr] = useState([]);
    function setData(){
        axios.get(`/notice/list`).then((res)=>{
            // res.data.ar 내가 원하는 배열
            setAr(res.data.ar);
        }); //done이 then

    }

    // 페이지가 열릴 때 한 번 호출해라
    // useEffect(function(){

    // });
    useEffect(()=>{
        setData();
    });

    return(
        <div>
            <h1>공지사항</h1>
            <hr></hr>
            <div className="list-bg">

                {ar.map((ar,i)=>{
                    return(
                      <div className="list-item" key={i}>
                          <h4>{ar.subject}</h4>
                          <p>{ar.write_date}</p>
                      </div>
                );})}
              



            </div>
        </div>
    );
}