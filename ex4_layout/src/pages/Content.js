import { Box, Button } from "@mui/material";
import React from "react";

const styles = {
    backgroundColor :"lightblue",
    width:"100%",
    height:"100vh", // view height 부모태그와 상관없이 꽉 채워
    margin:0,
    padding:0,
    paddingTop:"20px"
    


}

export default function Content(){
    const navItems=[
        "HOME","ABOUT","BOARD","PRODUCTS"
    ];
    return(
        <div style={styles} >
            <Box sx={{ display: {xs:'none',sm:'block',}}}>
                {navItems.map((menu)=>(
                    <Button sx={{color:"#000" , fontSize:"15px",fontWeight:"bold"}} variant="text">{menu}</Button>
                )) }
             </Box>
        </div>
    );
}