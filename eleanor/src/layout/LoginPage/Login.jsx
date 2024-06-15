import * as React from "react";
import { ToastContainer } from "react-toastify";
//MUI
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
    createTheme,
    ThemeProvider,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Background from "../../image/back.jpg";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button as AntButton, Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';


// import GoogleLogin from "react-google-login";
import styled from "styled-components";

const defaultTheme = createTheme();


const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Login = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <ThemeProvider theme={defaultTheme}>
            <ToastContainer />
            <Grid
                container
                component="main"
                sx={{
                    height: "100vh",
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) =>
                        t.palette.mode === "light"
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Link href="/">
                            <Box sx={{ xs: 1, zIndex: "1" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img src={'https://daokimcuong.vn/wp-content/uploads/2021/05/logo1-removebg-preview-1.png'} alt="" style={{ maxWidth: "30%" }} />
                                </Box>
                            </Box>
                        </Link>

                        <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
                            Đăng nhập
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                color="warning"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Địa chỉ email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                            <Button
                                color="warning"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 3, py: 1.5 }}
                            >
                                Đăng nhập
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <StyledNavLink to="/reset-password" variant="body2">
                                        Quên mật khẩu?
                                    </StyledNavLink>
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Login;
