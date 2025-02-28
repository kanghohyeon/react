import { Box, Grid } from "@mui/material";

export default function Nav() {
    const nav_items = [
        { title: "Home", path: "/" },
        { title: "Service", path: "/service" },
        { title: "Color", path: "/color" },
        { title: "Skin", path: "/skin" },
        { title: "About", path: "/about" },
    ];

    return (
        <Box id="header">
            <Grid container spacing={2} my={2}>
                {nav_items.map((item) => (
                    <Grid item key={item.title} xs={12} sm={6} md={2} bgcolor="primary.light" p={2}>
                        {item.title}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
