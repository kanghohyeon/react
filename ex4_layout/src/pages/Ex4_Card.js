import { HeartBroken, MoreHoriz, MoreVert, Send, Share } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";


function Ex4_Card(){
    return(
        <>
            <Stack spacing={2} direction={"row"}>

                <Box width={"300px"}>
                    <Card>
                        <CardMedia component="img" height="140" image="https://picsum.photos/300" alt="picsum photo"/>
                        <CardContent>
                            <Typography variant="h4" component="div"> 
                                {/* 습성이 컴포넌트 베리언트로 변함 */}
                                Card연습
                            </Typography>  
                            <Typography variant="p" color="red">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                            </Typography>
                            <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                            </CardActions>
                        </CardContent> 
                    </Card>
                </Box>

                <Box width={"300px"}>
                    <Card sx={{maxWidth:345}}>
                        <CardHeader avatar={<Avatar sx={{bgcolor:red[800]}}>R</Avatar>}   action={<IconButton aria-label="settings"><MoreHoriz/></IconButton>}
                         title="Shrimp and Chorizo Paella" subheader="September 14, 2016">
                          
                        </CardHeader>
                        <CardMedia component="img" height="140" image="https://picsum.photos/300" alt="picsum photo"/>
                        <CardContent>
                            <Typography variant="h4" component="div"> 
                                {/* 습성이 컴포넌트 베리언트로 변함 */}
                                Card연습
                            </Typography>  
                            <Typography variant="p" color="red">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                            </Typography>
                            <CardActions>

                                 <IconButton  onClick={()=>{ alert("i am button");}}>
                                                <HeartBroken></HeartBroken>
                                            </IconButton>
                                             <IconButton  onClick={()=>{ alert("i am button");}}>
                                                            <Share></Share>
                                                        </IconButton>
                           
                        
                            </CardActions>
                        </CardContent> 
                    </Card>
                </Box>






            </Stack>
        </>
    );
}

export default Ex4_Card;