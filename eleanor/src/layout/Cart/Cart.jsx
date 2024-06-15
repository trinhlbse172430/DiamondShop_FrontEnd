import React, { useEffect, useState } from "react";
import "./Cart.css";
import {
    Box,
    Container,
    Breadcrumbs,
    Link,
    Typography,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PlusOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button as AntButton } from 'antd';
import { Margin } from "@mui/icons-material";

export default function Cart() {
    const navigate = useNavigate();

    const [total, setTotal] = useState(0);


    const numberToVND = (number) => {
        return number.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
    };


    //notify
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, des) => {
        api[type]({
            message: 'Notification Title',
            description: des,
        });
    };


    return (
        <>
            <Header />
            <toastContainer />
            {contextHolder}
            <Container
                sx={{ position: "relative", top: "20px", marginBottom: "150px" }}
            >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                            href="/cart-product"
                        >
                            Giỏ hàng
                        </Link>
                    </Breadcrumbs>
                </div>
                <Box className="main-content-cart">
                    <Typography variant="h3" className="custom_blog_title" style={{ textAlign: 'center' }}>
                        Giỏ hàng
                    </Typography>
                    <Box className="shoppingcart-content">
                        <TableContainer>
                            <Table className="shop_table">
                                {/* <TableHead>
                      <TableRow>
                        <TableCell className="product-remove"></TableCell>
                        <TableCell className="product-thumbnail"></TableCell>
                        <TableCell className="product-name"></TableCell>
                        <TableCell className="product-price"></TableCell>
                        <TableCell className="product-quantity"></TableCell>
                        <TableCell className="product-subtotal"></TableCell>
                      </TableRow>
                    </TableHead> */}
                                <TableBody sx={{ border: "1px solid #f1f1f1" }}>
                                    <TableRow className="head-table">
                                        <TableCell className="product-name" colSpan={3} style={{ textAlign: 'center' }}>Sản phẩm</TableCell>
                                        <TableCell className="product-price">Giá</TableCell>
                                        <TableCell className="product-quantity">Số lượng</TableCell>
                                        <TableCell className="product-subtotal">Tổng</TableCell>
                                    </TableRow>
                                    {/* {data.map((product, index) => ( */}
                                    {/* <TableRow key={index} className="cart_item"> */}
                                    <TableRow className="cart_item">
                                        <TableCell className="product-thumbnail">
                                            <img
                                                // src={product.productId.productImage}
                                                // alt={product.productId.productName}
                                                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                            />
                                        </TableCell>
                                        <TableCell className="product-name" data-title="Product">
                                            <Typography variant="body1">
                                                {/* {product.productId.productName} */}
                                                Product 1
                                            </Typography>
                                        </TableCell>
                                        <TableCell className="product-price" data-title="Product">
                                            <Typography variant="body1">
                                                {/* {product.productId.productName} */}
                                                1,000,000 VND
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            className="product-quantity"
                                            data-title="Quantity"
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ width: "120px", display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <IconButton
                                                            aria-label="decrease quantity"
                                                            // onClick={() => handleDecreaseQuantity(product)}
                                                            style={{ backgroundColor: "#ffffff", width: '26px', height: '24px', padding: '0', fontSize: '12px' }}
                                                        >
                                                            <RemoveIcon />
                                                        </IconButton>
                                                        <input
                                                            type="text"
                                                            data-step="1"
                                                            data-min="0"
                                                            // value={product.quantity}
                                                            value="1"
                                                            title="Qty"
                                                            className="input-quantity"
                                                            size="4"
                                                            style={{ height: '30px', marginLeft: '5px', marginRight: '5px' }} // Adjust margin as needed
                                                        />
                                                        <IconButton
                                                            aria-label="increase quantity"
                                                            // onClick={() => handleIncreaseQuantity(product)}
                                                            style={{ backgroundColor: "#ffffff", width: '26px', height: '24px', padding: '0', fontSize: '12px' }}
                                                        >
                                                            <AddIcon />
                                                        </IconButton>
                                                    </div>

                                                </Box>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            className="product-subtotal"
                                            data-title="Subtotal"
                                        >
                                            {/* {
                                                    product.productId.discount !== 0
                                                        &&
                                                        dayjs().isBetween(dayjs(product.productId.saleStartTime), dayjs(product.productId.saleEndTime))
                                                        ?
                                                        (
                                                            <>
                                                                <Grid item xs style={{ display: 'flex' }}>
                                                                    <Typography style={{ textDecoration: "line-through" }}>
                                                                        {
                                                                            product.productId === null ? ""
                                                                                : product.productId.discount === 0 ? ""
                                                                                    : numberToVND(product.quantity * product.productId.price)
                                                                        }
                                                                    </Typography>
                                                                    <Typography style={{ color: '#ff5722' }}>
                                                                        {
                                                                            product.productId === null ? ""
                                                                                :
                                                                                numberToVND(product.quantity * (product.productId.price - (product.productId.price * product.productId.discount) / 100))
                                                                        }
                                                                    </Typography>
                                                                </Grid>
                                                            </>
                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <Grid item xs style={{ display: 'flex' }}>
                                                                    <Typography style={{ color: '#ff5722' }}>
                                                                        {
                                                                            product.productId === null ? ""
                                                                                :
                                                                                numberToVND(product.quantity * product.productId.price)
                                                                        }
                                                                    </Typography>
                                                                </Grid>
                                                            </>
                                                        )
                                                } */}
                                            1,000,000 VND
                                            <span className="woocommerce-Price-currencySymbol">
                                                VND
                                            </span>
                                        </TableCell>
                                        <TableCell className="product-remove">
                                            <DeleteIcon
                                                sx={{ color: '#ffffff' }}
                                                fontSize="large"
                                            // onClick={(e) =>
                                            //     handleDeleteOrder(product.productId._id)
                                            // }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    {/* ))} */}
                                    <TableRow>
                                        <TableCell className="actions" colSpan={6}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Box
                                                    className="coupon"
                                                    sx={{ display: "flex", alignItems: "center" }}
                                                >
                                                </Box>

                                                <Box
                                                    className="order-total"
                                                    sx={{ display: "flex", alignItems: "center" }}
                                                >
                                                    <Typography variant="h3">Tổng:</Typography>
                                                    <Typography variant="h3" className="total-price">
                                                        {total} VND
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box className="control-cart">
                            {/* {data.length === 0 ? (
                                <Button
                                    variant="outlined"
                                    className="button btn-continue-shopping"
                                    sx={{
                                        marginRight: "20px",
                                        backgroundColor: "#ffcdd2"
                                    }}
                                >
                                    Không có sản phẩm trong giỏ hàng
                                </Button>
                            ) : ( */}
                            <>
                                <Button
                                    variant="outlined"
                                    className="button btn-continue-shopping"
                                    sx={{ marginRight: "20px" }}
                                    href="/product-homepage"
                                    color="inherit"
                                >
                                    Tiếp tục mua sắm
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="button btn-cart-to-checkout"
                                    // onClick={() => handleCheckOut()}
                                    sx={{ backgroundColor: "#ffa733", color: "#ffffff" }}
                                >
                                    Thanh toán
                                </Button>
                            </>
                            {/* )} */}
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
}
