import { Abc, Send } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import React from "react";

export default function Ex3(){
    return(
        <Stack>
            <Stack direction={"row"}> 
                {/* 스택은 기본값이 컬럼 */}
                <Button variant="text" href="https://google.com">Google</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>
            <Stack direction={"row"} spacing={2} mt={5}> 
            
                <Button variant="contained"color="primary">primary</Button>
                <Button variant="contained"color="secondary">secondary</Button>
                <Button variant="contained"color="error">error</Button>
                <Button variant="contained"color="warning">warning</Button>
                <Button variant="contained" color="info">info</Button>
            </Stack>

            <Stack direction={"row"} spacing={2} mt={5}> 
            
            <Button variant="contained" startIcon={<Send/>} endIcon={<Abc/>}>small</Button>
            <Button variant="contained"size="medium" onClick={()=>{
                alert("HELLO WORLD");
            }}>medium</Button>
            <Button variant="contained"size="large" disableRipple>large</Button>
            <IconButton color="error" onClick={()=>{ alert("i am button");}}>
                <Send></Send>
            </IconButton>
            
        </Stack>
        </Stack>
    );
}