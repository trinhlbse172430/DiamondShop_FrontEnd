import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AccountInfo } from '../../components/Account/Account';
import {
    Breadcrumbs,
    Link,
    Button,
    IconButton,
} from "@mui/material";



export default function Page() {

    return (
        <div>
            <Header />
            <Stack spacing={3}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Breadcrumbs
                        aria-label="breadcrumb" sx={{ color: "#ffffff" }}
                    >
                        <Link
                            underline="hover"
                            sx={{ display: "flex", alignItems: "center" }}
                            color="#ffffff"
                            href="/"
                        >
                            Trang chủ
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: "flex", alignItems: "center" }}
                            color="#ffffff"
                            href="/Profile"
                        >
                            Profile
                        </Link>
                    </Breadcrumbs>
                </div>
                <Typography variant="h3" className="custom_blog_title" style={{ textAlign: 'center', marginTop: '20px' }}>
                    Customer Point
                </Typography>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <AccountInfo />
                    </Grid>
                </Grid>
            </Stack>
            <Footer />
        </div>

    );
}
