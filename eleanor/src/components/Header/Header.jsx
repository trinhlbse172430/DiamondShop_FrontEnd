import React, { useState, useEffect } from "react";
import './styles.css';
import { MenuOutlined, ShoppingCartOutlined, DownOutlined, RightOutlined, SearchOutlined, PhoneFilled } from '@ant-design/icons';
import SlideBarMenu from "../SlideBarMenu/SlideBarMenu";

const Header = () => {
    const [isDropdownOpen1, setIsDropdown1] = useState(false);
    const [isDropdownOpen2, setIsDropdown2] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

    const handleMouseEnter = (id) => {
        switch (id) {
            case 1:
                setIsDropdown1(true);
                break;
            case 2:
                setIsDropdown2(true);
                break;
            default:
                break;
        }
    };

    const handleMouseLeave = (id) => {
        switch (id) {
            case 1:
                setIsDropdown1(false);
                break;
            case 2:
                setIsDropdown2(false);
                break;
            default:
                break;
        }
    };

    const handleMouseOverTab = (tabId) => {
        setActiveTab(tabId);
    };

    const handleMouseLeaveTab = () => {
        setActiveTab(null);
    };

    const handleOpenSlideMenu = () => {
        setIsSlideMenuOpen(true);
    }


    return (
        <header id="header" class="header has-sticky sticky-jump">
            <SlideBarMenu
                openProp={isSlideMenuOpen} setOpenProp={setIsSlideMenuOpen}
            />
            <div class="header-wrapper">
                <div id="masthead" class="header-main show-logo-center hide-for-sticky nav-dark">
                    <div class="header-inner flex-row container logo-center medium-logo-center" role="navigation">
                        <div id="logo" class="flex-col logo">
                            <a href="http://localhost:3000" title=" ... Diamiond - Phân phối Sỉ Và Lẻ Kim Cương Việt Nam" rel="home">
                                <img width="130" height="122"
                                    src="https://daokimcuong.vn/wp-content/uploads/2021/05/logo1-removebg-preview-1.png"
                                    class="header-logo-dark" alt="Cao Hùng Diamond" />
                            </a>
                        </div>

                        {/* Mobile Left Elements */}
                        <div class="flex-col show-for-medium flex-left">
                            <ul class="mobile-nav nav nav-left ">
                            </ul>
                        </div>

                        {/* Left Elements */}
                        <div class="flex-col hide-for-medium flex-left">
                            <ul class="header-nav header-nav-main nav nav-left  nav-uppercase">
                                <li class="html custom html_topbar_left">
                                    Hệ thống showrooms
                                    <br />CN HCM: 35 Trần Phú, Phường 4, quận 5, TP. HCM<br />
                                    CN CT: 53 Trần Phú, Ninh Kiều, Cần Thơ
                                </li>
                            </ul>
                        </div>

                        {/* Right Elements  */}
                        <div class="flex-col hide-for-medium flex-right">
                            <ul class="header-nav header-nav-main nav nav-right  nav-uppercase">
                                <li class="html custom html_topbar_right"><PhoneFilled /> 0933 1977 55 - 0877
                                    056 688</li>
                                <li class="cart-item has-icon">
                                    <a href="" class="header-cart-link is-small"
                                        title="Giỏ hàng">
                                        <span class="header-cart-title">
                                            Giỏ hàng </span>
                                        <ShoppingCartOutlined />
                                    </a>
                                </li>
                                <li class="header-search-form search-form html relative has-icon">
                                    <div class="header-search-form-wrapper">
                                        <div class="searchform-wrapper ux-search-box relative form-flat is-normal">
                                            <form role="search" method="get" class="searchform"
                                                action="https://caohungdiamond.com/">
                                                <div class="flex-row relative">
                                                    <div class="flex-col flex-grow">
                                                        <label class="screen-reader-text"
                                                            for="woocommerce-product-search-field-0">Tìm kiếm:</label>
                                                        <input type="search" id="woocommerce-product-search-field-0"
                                                            class="search-field mb-0" placeholder="Tìm kiếm…" value="" name="s"
                                                            autocomplete="off" />
                                                        <input type="hidden" name="post_type" value="product" />
                                                    </div>
                                                    <div class="flex-col">
                                                        <button type="submit" value="Tìm kiếm"
                                                            class="ux-search-submit submit-button secondary button  icon mb-0"
                                                            aria-label="Submit">
                                                            <SearchOutlined /> </button>
                                                    </div>
                                                </div>
                                                <div class="live-search-results text-left z-top">
                                                    <div class="autocomplete-suggestions"
                                                        style={{ position: 'absolute', display: 'none', maxHeight: '300px', zIndex: 9999 }}>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="container">
                        <div class="top-divider full-width"></div>
                    </div>
                </div>
                <div id="wide-nav" class="header-bottom wide-nav nav-dark flex-has-center">
                    <div class="flex-row container">

                        <div class="flex-col hide-for-medium flex-center">
                            <ul class="nav header-nav header-bottom-nav nav-center  nav-uppercase">
                                <li id="menu-item-6344"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1840 current_page_item menu-item-6344 active menu-item-design-default "
                                >
                                    <a href="" aria-current="page" class="nav-top-link">Trang chủ</a>
                                </li>
                                <li id="menu-item-6346"
                                    className={`menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6346 menu-item-design-container-width menu-item-has-block has-dropdown has-icon-left ${isDropdownOpen1 ? 'current-dropdown' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                                    <a href="" class="nav-top-link"
                                        aria-expanded={isDropdownOpen1 ? 'true' : 'false'} aria-haspopup="menu"><img class="ux-menu-icon entered lazyloaded"
                                            width="25" height="25"
                                            alt="Icon nhẫn kim cương"
                                            src="https://caohungdiamond.com/wp-content/uploads/2022/06/nhan-nu.png"
                                            data-ll-status="loaded" />Trang sức kim cương<DownOutlined /></a>
                                    <div class="sub-menu nav-dropdown" style={{ top: '83px', right: '0', bottom: '0', left: '100px', width: '823px' }}>
                                        <div class="row row-small" id="row-343878564">
                                            <div id="col-153294758" class="col small-12 large-12">
                                                <div class="col-inner">

                                                    <div class="mega-menu" id="362-megamenu">
                                                        <div class="row row-small">
                                                            <div class="col large-3">
                                                                <div class="col-inner">
                                                                    <div class="menu-tab">

                                                                        <a href="http://localhost:3000/nhan-kim-cuong"
                                                                            class={`tablinks tablinks-362 has-child ${activeTab === 363 ? 'active' : ''}`}
                                                                            onMouseEnter={() => handleMouseOverTab(363)} >
                                                                            <img src="https://caohungdiamond.com/wp-content/uploads/2022/06/nhan-nu.png"
                                                                                alt="Nhẫn Kim Cương" />
                                                                            <span class="cat-name">Nhẫn Kim Cương</span><RightOutlined />
                                                                        </a>
                                                                        <a href=""
                                                                            class={`tablinks tablinks-362 has-child ${activeTab === 364 ? 'active' : ''}`}
                                                                            onMouseEnter={() => handleMouseOverTab(364)} >
                                                                            <img
                                                                                alt="Bông Tai Kim Cương"
                                                                                src="https://caohungdiamond.com/wp-content/uploads/2022/06/bong-tai.png" />
                                                                            <span class="cat-name">Bông Tai Kim Cương</span>
                                                                        </a>
                                                                        <a href=""
                                                                            class={`tablinks tablinks-362 has-child ${activeTab === 365 ? 'active' : ''}`}
                                                                            onMouseEnter={() => handleMouseOverTab(365)} >
                                                                            <img
                                                                                alt="Mặt Dây Chuyền Kim Cương"
                                                                                src="https://caohungdiamond.com/wp-content/uploads/2024/04/i-mat-day-chuyen-kim-cuong.png" />
                                                                            <span class="cat-name">Mặt Dây Chuyền Kim
                                                                                Cương</span>
                                                                        </a>
                                                                        <a href=""
                                                                            class={`tablinks tablinks-362 has-child ${activeTab === 366 ? 'active' : ''}`}
                                                                            onMouseEnter={() => handleMouseOverTab(366)} >
                                                                            <img
                                                                                alt="Lắc tay, vòng tay kim cương"
                                                                                src="https://caohungdiamond.com/wp-content/uploads/2023/11/icon-vong-tay-kim-cuong.png" />
                                                                            <span class="cat-name">Lắc tay, vòng tay kim
                                                                                cương</span>
                                                                        </a>
                                                                        <a href=""
                                                                            class={`tablinks tablinks-362 has-child ${activeTab === 367 ? 'active' : ''}`}
                                                                            onMouseEnter={() => handleMouseOverTab(367)}>
                                                                            <img
                                                                                alt="Vỏ Mặt Dây Chuyền Kim Cương"
                                                                                src="https://caohungdiamond.com/wp-content/uploads/2022/08/vo-mat-day-chuyen.png" />
                                                                            <span class="cat-name">Vỏ Mặt Dây Chuyền Kim
                                                                                Cương</span>
                                                                        </a>
                                                                        <a href=""
                                                                            class={`tablinks tablinks-362 has-child ${activeTab === 368 ? 'active' : ''}`}
                                                                            onMouseEnter={() => handleMouseOverTab(368)} >
                                                                            <img
                                                                                alt="Vỏ Nhẫn kim Cương"
                                                                                src="https://caohungdiamond.com/wp-content/uploads/2022/06/vo-nhan.png" />
                                                                            <span class="cat-name">Vỏ Nhẫn kim Cương</span><RightOutlined />
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col large-9">
                                                                <div class="col-inner">
                                                                    <div id="363"
                                                                        class={`menu-tabcontent menu-tabcontent-362 ${activeTab === 363 ? 'active' : ''}`}>
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                    <ul class="mega-menu-child">

                                                                                        <li>
                                                                                            <a
                                                                                                href="">Nhẫn
                                                                                                Kim Cương Nam</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="">Nhẫn
                                                                                                Kim Cương Nữ</a>
                                                                                        </li>

                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Nhẫn Kim Cương Tự Nhiên GIA Đẹp Giá Rẻ Cao Cấp"
                                                                                            width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2023/09/banner-nhan-kim-cuong.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="370" class={`menu-tabcontent menu-tabcontent-362 ${activeTab === 364 ? 'active' : ''}`}>
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Bông tai kim cương"
                                                                                            width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2022/07/bong-tai-kim-cuong.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="384" class={`menu-tabcontent menu-tabcontent-362 ${activeTab === 365 ? 'active' : ''}`}>
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Mặt Dây Chuyền Kim Cương"
                                                                                            width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2023/09/banner-mat-day-chuyen-kim-cuong.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="438" class={`menu-tabcontent menu-tabcontent-362 ${activeTab === 366 ? 'active' : ''}`}>
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Banner Lắc tay, vòng tay kim cương"
                                                                                            width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2023/11/banner-vong-tay-kim-cuong.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="369" class={`menu-tabcontent menu-tabcontent-362 ${activeTab === 367 ? 'active' : ''}`}>
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Vỏ mặt dây chuyền kim cương Cao Hùng"
                                                                                            width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2022/08/vo-mat-day-chuyen-kim-cuong-cao-hung.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="365" class={`menu-tabcontent menu-tabcontent-362 ${activeTab === 368 ? 'active' : ''}`}>
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                    <ul class="mega-menu-child">

                                                                                        <li>
                                                                                            <a
                                                                                                href="">Vỏ
                                                                                                Nhẫn Kim Cương Nam</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="">Vỏ
                                                                                                Nhẫn Kim Cương Nữ</a>
                                                                                        </li>

                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Vỏ nhân kim cương" width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2022/07/vo-nhan-kim-cuong.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li id="menu-item-6345"
                                    class={`menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6345 menu-item-design-container-width menu-item-has-block has-dropdown has-icon-left  ${isDropdownOpen2 ? 'current-dropdown' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                                    <a href="" class="nav-top-link"
                                        aria-expanded={isDropdownOpen2 ? "true" : "false"} aria-haspopup="menu"><img class="ux-menu-icon entered lazyloaded"
                                            width="25" height="25"
                                            alt="Nhẫn cưới kim cương Icon"
                                            src="https://caohungdiamond.com/wp-content/uploads/2022/06/nhan-cuoi.png"
                                            data-ll-status="loaded" />Trang sức cưới<DownOutlined /></a>
                                    <div class="sub-menu nav-dropdown" style={{ top: '83px', right: '0', bottom: '0', left: '100px', width: '823px' }}>
                                        <div class="row row-small" id="row-862664933">


                                            <div id="col-129762351" class="col small-12 large-12">
                                                <div class="col-inner">



                                                    <div class="mega-menu" id="371-megamenu">
                                                        <div class="row row-small">
                                                            <div class="col large-3">
                                                                <div class="col-inner">
                                                                    <div class="menu-tab">

                                                                        <a href=""
                                                                            class="tablinks tablinks-371 active has-child"
                                                                            onmouseover="openCity_371(event, 372)">
                                                                            <img
                                                                                alt="Nhẫn Cưới Kim Cương"
                                                                                src="https://caohungdiamond.com/wp-content/uploads/2022/06/nhan-cuoi.png" />
                                                                            <span class="cat-name">Nhẫn Cưới Kim Cương</span>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col large-9">
                                                                <div class="col-inner">
                                                                    <div id="372"
                                                                        class="menu-tabcontent menu-tabcontent-371 active">
                                                                        <div class="row row-small">
                                                                            <div class="col large-4">
                                                                                <div class="col-inner">
                                                                                    <ul class="mega-menu-child">

                                                                                        <li>
                                                                                            <a
                                                                                                href="">Nhẫn
                                                                                                Kim Cương Cầu Hôn</a>
                                                                                        </li>

                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col large-8">
                                                                                <div class="col-inner">
                                                                                    <div class="mega-banner">
                                                                                        <img
                                                                                            alt="Nhẫn Cặp, Nhẫn Cưới Kim Cương Đẹp Nhất"
                                                                                            width="100%"
                                                                                            src="https://caohungdiamond.com/wp-content/uploads/2023/10/nhan-cap-nhan-cuoi-kim-cuong-caohungdiamond.jpg" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li id="menu-item-6471"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6471 menu-item-design-default has-icon-left">
                                    <a href="" class="nav-top-link"><img
                                        class="ux-menu-icon entered lazyloaded" width="25" height="25"
                                        alt="Viên kim cương Icon"
                                        src="https://caohungdiamond.com/wp-content/uploads/2024/04/Vien-Kim-Cuong-icon.png"
                                        data-ll-status="loaded" />Bảng giá kim cương</a></li>
                                <li id="menu-item-28272"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28272 menu-item-design-default">
                                    <a href="" class="nav-top-link">Kiến thức trang sức</a>
                                </li>
                                <li id="menu-item-28273"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28273 menu-item-design-default">
                                    <a href="" class="nav-top-link">Kiến
                                        thức kim cương</a></li>
                                <li id="menu-item-6347"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6347 menu-item-design-default">
                                    <a href="" class="nav-top-link">Giới thiệu</a></li>
                                <li id="menu-item-6409"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6409 menu-item-design-default">
                                    <a href="" class="nav-top-link">Liên hệ</a></li>
                            </ul>
                        </div>

                        <div class="flex-col show-for-medium flex-grow">
                            <ul class="nav header-bottom-nav nav-center mobile-nav  nav-uppercase">
                                <li class="nav-icon has-icon" onClick={handleOpenSlideMenu}>
                                    <a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay"
                                        data-color="dark" class="is-small" aria-label="Menu" aria-controls="main-menu"
                                        aria-expanded="false">
                                        <MenuOutlined />
                                    </a>
                                </li>
                                <li class="html custom html_nav_position_text"><a href=""><img
                                    src="https://daokimcuong.vn/wp-content/uploads/2021/05/logo1-removebg-preview-1.png"
                                    alt="Logo Cao Hùng Diamond Mobile" style={{ maxHeight: '60px' }} /></a></li>
                                <li class="cart-item has-icon">

                                    <a href="http://localhost:3000/gio-hang" class="header-cart-link is-small"
                                        title="Giỏ hàng">

                                        <span class="header-cart-title">
                                            Giỏ hàng </span>

                                        <ShoppingCartOutlined />
                                    </a>

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="header-bg-container fill">

                </div>
            </div>
        </header>
    )
}

export default Header;