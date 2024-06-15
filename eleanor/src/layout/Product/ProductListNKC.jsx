import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
    Container,
    Link,
    Breadcrumbs,
    Box,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardActions,
    IconButton
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link as RouterLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { BorderClear } from "@mui/icons-material";
import './css/product.css'
import axios from "axios";
import { useEffect, useState } from "react";


const numberToVND = (number) => {
    return number.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
};

function ProductItem({ product }) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card">
                <CardActionArea component={RouterLink} to={``}>

                    <CardContent sx={{ textAlign: "center", padding: '0 0 0 0', backgroundColor: '#2a2a2a' }}>
                        <CardMedia
                            component="img"
                            image={'https://caohungdiamond.com/wp-content/uploads/2023/11/vt0159-3-247x296.jpg'}
                            //alt={}
                            style={{ padding: '9px 9px' }}
                        />
                        <Typography
                            gutterBottom
                            variant="h7"
                            component="div"
                            className="product-title"
                        >
                            Product name
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className="product-code"
                        >
                            {product.ProductID ? product.ProductID : "Product code"}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            className="product-price"
                        >
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h2"
                                style={{ color: "#ebbc6c" }}
                            >
                                {product.WagePrice ? numberToVND(product.WagePrice) : "Price"} VND
                            </Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default function ProductListNKC() {
    const [data, setData] = useState([]);

    //-----------------useEffect-----------------

    useEffect(() => {
        loadAllProduct();
    }, []);

    //-----------------handle--------------------
    const loadAllProduct = async () => {
        try {
            const loadData = await axios.get('/product');
            if (loadData.error) {
                console.log('erroe' + loadData.error);
            } else {
                setData(loadData.data)
                console.log('data', loadData.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Header />
            <Container class="container-product"
            >
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
                        href="/nhan-kim-cuong"
                    >
                        Nhẫn kim cương
                    </Link>
                </Breadcrumbs>
                <Box className="main-content-cart" >
                    <Grid container spacing={1}>
                        <Typography variant="h3" className="custom_blog_title" style={{ textAlign: 'center' }}>
                            Nhẫn Kim Cương
                        </Typography>
                        <Box class="site-main">
                            <Grid container spacing={2}>
                                {!data || data.length === 0 ? (
                                    <Typography variant="h5" style={{ textAlign: 'center' }}>Không có sản phẩm</Typography>
                                ) : (
                                    data.map((product) => (
                                        <ProductItem key={product.ProID} product={product} />
                                    ))
                                )}
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}