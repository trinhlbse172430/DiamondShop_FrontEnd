import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./layout/LandingPage/LandingPage";
import Login from "./layout/LoginPage/Login";
import Cart from "./layout/Cart/Cart";
import ProductListNKC from "./layout/Product/ProductListNKC";


function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/gio-hang" element={<Cart />} />


            {/* ---------------- danh sach san pham ---------------------*/}
            <Route path="/nhan-kim-cuong" element={<ProductListNKC />} />


          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </>
  );
}

export default App;


