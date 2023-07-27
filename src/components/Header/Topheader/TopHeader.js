import React from 'react'
export default function TopHeader() {
  return (
    <div className="top-menu bg-dark text-white">
    <div className="container">
        <nav className="navbar navbar-expand text-white">
            <div className="shiping-title d-none d-sm-flex">Welcome To RS Online Service!</div>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li class="nav-item"><a class="nav-link text-white" href="/Trackingoder">Track Order</a>
                </li>
                {/* <li class="nav-item"><a class="nav-link text-white" href="about-usrequired/>">About</a>
                </li> */}
                {/* <li class="nav-item"><a class="nav-link text-white" href="shop-categoriesrequired/>">Our Stores</a>
                </li> */}
                <li class="nav-item"><a class="nav-link text-white" href="/Blogs">Blog</a>
                </li>
                <li class="nav-item"><a class="nav-link text-white" href="contact-us">Contact</a>
                </li>
                <li class="nav-item"><a class="nav-link text-white" href="javascript:;">Become Retailer</a>
                </li>
            </ul>
            {/* <!-- <ul className="navbar-nav">
                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">INR</a>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li><a class="dropdown-item" href="#">USD</a>
                        </li>
                        <li><a class="dropdown-item" href="#">EUR</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">ENG</a>
                    <div className="dropdown-menu dropdown-menu-lg-end">
                        <a class="dropdown-item d-flex allign-items-center" href="javascript:;"> <i
                                className="flag-icon flag-icon-de me-2"></i><span>German</span>
                        </a> <a class="dropdown-item d-flex allign-items-center" href="javascript:;"><i
                                className="flag-icon flag-icon-fr me-2"></i><span>French</span></a>
                        <a class="dropdown-item d-flex allign-items-center" href="javascript:;"><i
                                className="flag-icon flag-icon-um me-2"></i><span>English</span></a>
                        <a class="dropdown-item d-flex allign-items-center" href="javascript:;"><i
                                className="flag-icon flag-icon-in me-2"></i><span>Hindi</span></a>
                        <a class="dropdown-item d-flex allign-items-center" href="javascript:;"><i
                                className="flag-icon flag-icon-cn me-2"></i><span>Chinese</span></a>
                        <a class="dropdown-item d-flex allign-items-center" href="javascript:;"><i
                                className="flag-icon flag-icon-ae me-2"></i><span>Arabic</span></a>
                    </div>
                </li>
            </ul> --> */}
            <ul className="navbar-nav social-link ms-lg-2 ms-auto">
                <li class="nav-item"> <a class="nav-link text-white" href="javascript:;"><i
                            className='bx bxl-facebook'></i></a>
                </li>
                <li class="nav-item"> <a class="nav-link text-white" href="javascript:;"><i
                            className='bx bxl-twitter'></i></a>
                </li>
                <li class="nav-item"> <a class="nav-link text-white" href="javascript:;"><i
                            className='bx bxl-linkedin'></i></a>
                </li>
            </ul>
        </nav>
    </div>
</div>
  )
}
