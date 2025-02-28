import { Box, Grid2 } from "@mui/material";
import React from "react";

export default function Ex2(){
    
    return(
        <>
            <Grid2 container mt={5}>
                <Grid2 item size={[12,6,2]} sm>
                    <Box bgcolor="primary.light" p={2}>menu1</Box>
                </Grid2>
                <Grid2 item size={[12,6,2]} sm>
                    <Box bgcolor="primary.light" p={2}>menu2</Box>
                </Grid2>
                <Grid2 item size={[12,6,2]} sm>
                    <Box bgcolor="primary.light" p={2}>menu3</Box>
                </Grid2>
                <Grid2 item size={[12,6,2]} sm>
                    <Box bgcolor="primary.light" p={2}>menu4</Box>
                </Grid2>
                <Grid2 item size={[12,6,2]} sm>
                    <Box bgcolor="primary.light" p={2}>menu5</Box>
                </Grid2>
            </Grid2>
        </>
    );
}