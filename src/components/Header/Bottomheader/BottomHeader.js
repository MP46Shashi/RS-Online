import React from "react";
import "./bottom.css";
export default function BottomHeader() {
  return (
    <div style={{position:"sticky",top:"0", zIndex:"9999"}}>
      
        <div id="post" class="primary-menu ">
          <nav class="navbar navbar-expand-xl w-100 navbar-dark container mb-0 p-0">
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasNavbar"
            >
              <div class="offcanvas-header">
                <div class="offcanvas-logo">
                  <img src="assets/images/logo-icon.png" width="100" alt="" />
                </div>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body primary-menu">
                <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link  dropdown-toggle-nocaret"
                      href="tv-shows.html"
                      data-bs-toggle="dropdown"
                    >
                      Srevices <i class="bx bx-chevron-down ms-1"></i>
                    </a>
                    <div class="dropdown-menu dropdown-large-menu">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="large-menu-title">Online Services</h6>
                          <ul class="list-unstyled">
                            <li>
                              <a href="javascript:;">PAN Card</a>
                            </li>
                            <li>
                              <a href="javascript:;">Aadhar Card</a>
                            </li>
                            <li>
                              <a href="javascript:;">Driving Licence</a>
                            </li>
                            <li>
                              <a href="javascript:;">Income Certificate</a>
                            </li>
                            <li>
                              <a href="javascript:;">Domecile Certificate</a>
                            </li>
                            <li>
                              <a href="javascript:;">Birth Certificatr</a>
                            </li>
                            <li>
                              <a href="javascript:;">Death Certificate</a>
                            </li>
                            <li>
                              <a href="javascript:;">Samagra ID</a>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 --> */}
                        <div class="col-6">
                          <h6 class="large-menu-title">Result</h6>
                          <ul class="list-unstyled">
                            <li>
                              <a href="javascript:;">
                                10<sup>th</sup>Result
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                12<sup>th</sup>Result
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">RRB Result</a>
                            </li>
                            <li>
                              <a href="javascript:;">MPPSC Result</a>
                            </li>
                            <li>
                              <a href="javascript:;">SSC Result</a>
                            </li>
                            <li>
                              <a href="javascript:;">NEET Result</a>
                            </li>
                            <li>
                              <a href="javascript:;">MPPEB Result</a>
                            </li>
                            <li>
                              <a href="javascript:;">IBPS Result</a>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 --> */}
                        {/* <!-- <div class="col-12 col-xl-3">
                                    <h6 class="large-menu-title">Groceries</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="javascript:;">Bakery and Bread</a>
                                        </li>
                                        <li><a href="javascript:;">Meat and Seafood</a>
                                        </li>
                                        <li><a href="javascript:;">asta and Rice</a>
                                        </li>
                                        <li><a href="javascript:;">Fruit & Vegetables</a>
                                        </li>
                                        <li><a href="javascript:;">Condiments</a>
                                        </li>
                                        <li><a href="javascript:;">Cereals</a>
                                        </li>
                                        <li><a href="javascript:;">Soups</a>
                                        </li>
                                        <li><a href="javascript:;">Dairy and Eggs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-xl-3">
                                    <h6 class="large-menu-title">Groceries</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="javascript:;">Bakery and Bread</a>
                                        </li>
                                        <li><a href="javascript:;">Meat and Seafood</a>
                                        </li>
                                        <li><a href="javascript:;">asta and Rice</a>
                                        </li>
                                        <li><a href="javascript:;">Fruit & Vegetables</a>
                                        </li>
                                        <li><a href="javascript:;">Condiments</a>
                                        </li>
                                        <li><a href="javascript:;">Cereals</a>
                                        </li>
                                        <li><a href="javascript:;">Soups</a>
                                        </li>
                                        <li><a href="javascript:;">Dairy and Eggs</a>
                                        </li>
                                    </ul>
                                </div> --> */}
                        {/* <!-- end col-3 --> */}
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link  dropdown-toggle-nocaret"
                      href="tv-shows.html"
                      data-bs-toggle="dropdown"
                    >
                      Products <i class="bx bx-chevron-down ms-1"></i>
                    </a>
                    <div class="dropdown-menu dropdown-large-menu">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="large-menu-title">Electronics</h6>
                          <ul class="list-unstyled">
                            <li>
                              <a href="javascript:;">Moniters</a>
                            </li>
                            <li>
                              <a href="javascript:;">Laptops</a>
                            </li>
                            <li>
                              <a href="javascript:;">Printers</a>
                            </li>
                            <li>
                              <a href="javascript:;">Ratina Scanner</a>
                            </li>
                            <li>
                              <a href="javascript:;">Lamination Machine</a>
                            </li>
                            <li>
                              <a href="javascript:;">Biometric Scanner</a>
                            </li>
                            <li>
                              <a href="javascript:;">Xerox Machine</a>
                            </li>
                            <li>
                              <a href="javascript:;">PC Monitors</a>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 --> */}
                        <div class="col-6">
                          <h6 class="large-menu-title">Accessories</h6>
                          <ul class="list-unstyled">
                            <li>
                              <a href="javascript:;">Mouse</a>
                            </li>
                            <li>
                              <a href="javascript:;">Keyboard</a>
                            </li>
                            <li>
                              <a href="javascript:;">Headphones</a>
                            </li>
                            <li>
                              <a href="javascript:;">earphones</a>
                            </li>
                            <li>
                              <a href="javascript:;">Printer-ink</a>
                            </li>
                            <li>
                              <a href="javascript:;">Copier-Paper</a>
                            </li>
                            <li>
                              <a href="javascript:;">Cables</a>
                            </li>
                            <li>
                              <a href="javascript:;">PVC-Card</a>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 -->
                                
                                <!-- end col-3 -->
                                <!-- <div class="col-12 col-xl-4">
                                    <h6 class="large-menu-title">Groceries</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="javascript:;">Bakery and Bread</a>
                                        </li>
                                        <li><a href="javascript:;">Meat and Seafood</a>
                                        </li>
                                        <li><a href="javascript:;">asta and Rice</a>
                                        </li>
                                        <li><a href="javascript:;">Fruit & Vegetables</a>
                                        </li>
                                        <li><a href="javascript:;">Condiments</a>
                                        </li>
                                        <li><a href="javascript:;">Cereals</a>
                                        </li>
                                        <li><a href="javascript:;">Soups</a>
                                        </li>
                                        <li><a href="javascript:;">Dairy and Eggs</a>
                                        </li>
                                        <li class="nav-item dropdown"><a
                                                class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                                href="#">Shop Layouts <i
                                                    class='bx bx-chevron-right float-end'></i></a>
                                            <ul class="submenu dropdown-menu">
                                                <li><a class="dropdown-item"
                                                        href="shop-grid-left-sidebar.html">Shop
                                                        Grid - Left Sidebar</a>
                                                </li>
                                                <li><a class="dropdown-item"
                                                        href="shop-grid-right-sidebar.html">Shop Grid -
                                                        Right
                                                        Sidebar</a>
                                                </li>
                                                <li><a class="dropdown-item"
                                                        href="shop-list-left-sidebar.html">Shop
                                                        List - Left Sidebar</a>
                                                </li>
                                                <li><a class="dropdown-item"
                                                        href="shop-list-right-sidebar.html">Shop List -
                                                        Right
                                                        Sidebar</a>
                                                </li>
                                                <li><a class="dropdown-item"
                                                        href="shop-grid-filter-on-top.html">Shop Grid -
                                                        Top
                                                        Filter</a>
                                                </li>
                                                <li><a class="dropdown-item"
                                                        href="shop-list-filter-on-top.html">Shop List -
                                                        Top
                                                        Filter</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div> --> */}
                        {/* <!-- end col-3 --> */}
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link  dropdown-toggle-nocaret"
                      href="javascript:;"
                      data-bs-toggle="dropdown"
                    >
                      Shop <i class="bx bx-chevron-down ms-1"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item dropdown">
                        <a
                          class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                          href="#"
                        >
                          Shop Layouts{" "}
                          <i class="bx bx-chevron-right float-end"></i>
                        </a>
                        <ul class="submenu dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              href="shop-grid-left-sidebar.html"
                            >
                              Shop Grid - Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="shop-grid-right-sidebar.html"
                            >
                              Shop Grid - Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="shop-list-left-sidebar.html"
                            >
                              Shop List - Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="shop-list-right-sidebar.html"
                            >
                              Shop List - Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="shop-grid-filter-on-top.html"
                            >
                              Shop Grid - Top Filter
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="shop-list-filter-on-top.html"
                            >
                              Shop List - Top Filter
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="product-details.html">
                          Product Details
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="shop-cart.html">
                          Shop Cart
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="shop-categories.html">
                          Shop Categories
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-details.html">
                          Billing Details
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-shipping.html">
                          Checkout Shipping
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-payment.html">
                          Payment Method
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-review.html">
                          Order Review
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-complete.html">
                          Checkout Complete
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="order-tracking.html">
                          Order Tracking
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="product-comparison.html">
                          Product Comparison
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link  dropdown-toggle-nocaret"
                      href="javascript:;"
                      data-bs-toggle="dropdown"
                    >
                      Retailers <i class="bx bx-chevron-down ms-1"></i>
                    </a>
                    <ul class="dropdown-menu">
                      {/* <!-- <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Shop
                                    Layouts <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li> --> */}
                      <li>
                        <a class="dropdown-item" href="product-details.html">
                          Retailer-1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="shop-cart.html">
                          Retailer-2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="shop-categories.html">
                          Retailer-3
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-details.html">
                          Retailer-4
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-shipping.html">
                          Retailer-5
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-payment.html">
                          Retailer-6
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-review.html">
                          Retailer-7
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="checkout-complete.html">
                          Retailer-8
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="order-tracking.html">
                          Retailer-9
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="product-comparison.html">
                          Retailer-10
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;"
                            data-bs-toggle="dropdown">
                            Account <i class='bx bx-chevron-down ms-1'></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="account-dashboard.html">Dashboard</a>
                            </li>
                            <li><a class="dropdown-item" href="account-downloads.html">Downloads</a>
                            </li>
                            <li><a class="dropdown-item" href="account-orders.html">My Orders</a>
                            </li>
                            <li><a class="dropdown-item" href="account-user-details.html">User
                                    Details</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="authentication-login.html">Login</a></li>
                            <li><a class="dropdown-item"
                                    href="authentication-register.html">Register</a></li>
                            <li><a class="dropdown-item"
                                    href="authentication-reset-password.html">Password</a></li>
                        </ul>
                    </li> -->
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;"
                            data-bs-toggle="dropdown">
                            Payments <i class='bx bx-chevron-down ms-1'></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Shop
                                    Layouts <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Product
                                    Details <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Shop
                                    Cart <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Shop
                                    Categories <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Billing
                                    Details <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Checkout
                                    Shipping <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Payment
                                    Method<i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Order
                                    Review <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Checkout
                                    Complete <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Order
                                    Tracking <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a
                                    class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    href="#">Product
                                    Compairison <i class='bx bx-chevron-right float-end'></i></a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="shop-grid-left-sidebar.html">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-right-sidebar.html">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="shop-list-left-sidebar.html">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-right-sidebar.html">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-grid-filter-on-top.html">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                    <li><a class="dropdown-item"
                                            href="shop-list-filter-on-top.html">Shop
                                            List
                                            -
                                            Top
                                            Filter</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> --> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      
    </div>
  );
}
