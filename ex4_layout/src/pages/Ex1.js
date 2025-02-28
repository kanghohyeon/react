import { Container, Grid, Grid2 } from "@mui/material";
import React from "react";
import Left from "./Left";
import Content from "./Content";

export default function Ex1(){
    return(
        <>
          <Container maxWidth={false}>
            <Grid2 container>
                <Grid2 size={3} alignItems={true}>
                    <Left/>
                </Grid2>
                <Grid2 size={9} alignItems={true}>
                    <Content/>
                </Grid2>
            </Grid2>
        </Container>
        </>
    );
}