import Nav from "./Nav";


 function Header(){
    /*eslint-disable*/ 
    return(
        <div style={{width:"100%",margin:"auto",paddingTop:"20px"}}>
            <img src="/images/image.png" alt="logo"/> 
            {/* 기본 주소가 퍼블릭 */}
            <Nav/>
        </div>
    );
}
export default Header;