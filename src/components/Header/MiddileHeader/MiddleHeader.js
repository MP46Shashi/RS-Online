import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCartTotal } from '../../../store/cartSlice';
import { fetchCategories } from '../../../store/categorySlice';
export default function MiddleHeader() {
    const dispatch = useDispatch();
    const {data: categories} = useSelector((state) => state.category);
    const {totalItems} = useSelector((state => state.cart));
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    useEffect(() => {
      dispatch(fetchCategories());
      dispatch(getCartTotal());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  return (
    <div class="header-content">
    <div class="container">
        <div class="row align-items-center gx-4">
            <div class="col-auto">
                <div class="d-flex align-items-center gap-3">
                    <div class="mobile-toggle-menu d-inline d-xl-none" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar">
                        <i class="bx bx-menu"></i>
                    </div>
                    <div class="logo">
                        <a href="index.html">
                            <img src="./images/logo-icon.png" class="logo-icon" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl order-4 order-xl-0">
                <div class="input-group flex-nowrap pb-3 pb-xl-0">
                    <input type="text" class="form-control w-100 border-warning border border-3"
                        placeholder="Search for Products" />
                    <button class="btn btn-warning btn-ecomm border-3 text-green" type="button">Search</button>
                </div>
            </div>
            <div class="col-auto d-none d-xl-flex ">
                <div class="d-flex align-items-center gap-3">
                    <div class="fs-1 text-content"><i class='bx bx-headphone text-green'></i></div>
                    <div class="text-center ">
                        <p class="mb-0 text-content text-green">CALL US NOW</p>
                        <h5 class="mb-0 text-green">+011 5827918</h5>
                    </div>
                </div>
            </div>
            <div class="col-auto ms-auto">
                <div class="top-cart-icons">
                    <nav class="navbar navbar-expand">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown dropdown-large">
                                <a href="#"
                                    class="nav-link  dropdown-toggle-nocaret position-relative fs-1 cart-link"
                                    data-bs-toggle="dropdown"> <span class="alert-count">{totalItems}</span>
                                    <i class='bx bx-shopping-bag'></i>
                                </a>
                            </li>
                            {/* <!-- <li class="nav-item"><a href="account-dashboard.html"
                                    class="nav-link cart-link"></a>
                            </li> --> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle-nocaret fs-1 text-green" href="javascript:;"
                                    data-bs-toggle="dropdown">
                                    <i class='bx bx-user-circle'></i>
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
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="authentication-login.html">Login</a></li>
                                    <li><a class="dropdown-item"
                                            href="authentication-register.html">Register</a></li>
                                    <li><a class="dropdown-item"
                                            href="authentication-reset-password.html">Password</a></li>
                                </ul>
                            </li>
                            {/* <!-- <li class="nav-item"><a href="wishlist.html" class="nav-link cart-link"><i
                                        class='bx bx-heart'></i></a>
                            </li> --> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!--end row--> */}
    </div>
</div>
  )
}
