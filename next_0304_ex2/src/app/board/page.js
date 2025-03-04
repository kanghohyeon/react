
import BbsTr from "@/component/BbsTr";


export default function Board() { 
    // usState를 쓸 필요 없는 예제
    // 게시글 데이터를 배열로 관리
    const rows = [
        { id: 1, title: "넥스트 js", author: "일지매", date: "2025-03-04", views: 10 },
        { id: 2, title: "두 번째 글", author: "이지매", date: "2025-03-03", views: 20 },
        { id: 3, title: "세 번째 글", author: "삼지매", date: "2025-03-02", views: 30 }
    ];

    return (
        <div>
            <h1 className="title"> 게시판 </h1>
            <hr />

            <table className="t1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 데이터 배열을 map()을 이용해 동적으로 tr 생성 */}
                    {/* 로우 뒤에 인덱스 만들어서 Bbs에서 받아서 번호로 출력해보자자 */}
                    {rows.map((row) => (
                        <BbsTr key={row.id} data={row} />
                        // 컴포넌트를 활용하는 곳에서 반복문을 돌려라
                    ))}
                </tbody>
            </table>
        </div>
    );
}
