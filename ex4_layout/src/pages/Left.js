import { margin, padding } from "@mui/system";
import React from "react";


const styles = {
    backgroundColor :"orange",
    width:"100%",
    height:"100vh", // view height 부모태그와 상관없이 꽉 채워
    margin:0,
    padding:0,


}

export default function Left(){
    return(
        <div style={styles}>
            <h1 style={{margin:0,padding:0}}>쌍용교육센터</h1>
        </div>
    );
}