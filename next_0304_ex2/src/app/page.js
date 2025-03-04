"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


// 동적인 변수 useState를 쓰면 클라이언트 컴포넌트로 바뀌어야함 1번째 구문 필수

export default function Home() {
  let title = "제목1";
  let title2="sub_title";
  // 글로벌 css에서 css변경한 클래스네임을 변수로 선언해서 사용하는 방법
  const [sub,setSub] = useState("부제목1");

  return (
    <div className={styles.page}>
      <h1 className="title">{title}</h1>
      <h2 className={title2}>{sub}</h2>
    </div>
  );
}
