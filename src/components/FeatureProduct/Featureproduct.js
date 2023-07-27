import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
export default function Featureproduct() {
    const dispatch = useDispatch();
    // const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
    const {data: products, status: productStatus} = useSelector((state) => state.product);
    // const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);
    useEffect(() => {
      dispatch(fetchProducts());
    //   dispatch(fetchCategories());
    //   dispatch(fetchProductsByCategory(1, 'all'));
    //   dispatch(fetchProductsByCategory(2, 'all'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* <!--start Featured product--> */}
            <section class="py-4" >
                <div class="container">
                    <div class="separator pb-4">
                        <div class="line"></div>
                        <h5 class="mb-0 fw-bold separator-title">FEATURED ACCESSORIES</h5>
                        <div class="line"></div>
                    </div>
                    <div class="product-grid">
                        <div
                            class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3 g-sm-4">
                             {
                            products.slice(0, 8).map(product => (
                                <div class="col">
                                <div class="card"  >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src={product.images[0]} class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">{product.title}
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; {product.price}</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                            {/* <div class="col">
                                <div class="card"  >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/01.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Compuuter Mouse
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/02.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Compuuter Moniter
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/03.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Printers
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/04.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Iris Scanner
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/05.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Lamination Machine
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/06.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Biometric Scanner
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/07.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Computer Keyboard
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/08.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Earphones
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/09.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Printer Ink Cartridge
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/10.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Copier Paper Reams
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/11.jpg" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">Electrinics Cabels
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <div class="position-relative overflow-hidden">
                                        <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                            <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                        </div>
                                        <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                            <a href="javascript:;" data-bs-toggle="modal"
                                                data-bs-target="#QuickViewProduct">Quick View</a>
                                        </div>
                                        <a href="javascript:;">
                                            <img src="./images/products/12.heic" class="img-fluid" style={{ backgroundColor: "rgb(220,252,231)" }}
                                                alt="..." />
                                        </a>
                                    </div>
                                    <div class="card-body ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="">
                                                <p class="mb-1 product-short-name">ACCESSORIES</p>
                                                <h6 class="mb-0 fw-bold product-short-title">PVC Cards
                                                </h6>
                                            </div>
                                            <div class="icon-wishlist">
                                                <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="cursor-pointer rating mt-2">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </div>
                                        <div
                                            class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                            <div
                                                class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                                &#x20B9; 59.00</div>
                                            <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div> 
                        {/* <!--end row--> */}

                    </div>
                    <br /><br />
                    <div className='text-center'>
                        <a href="javascript:;" class="services btn-ecomm text-green">See More</a>
                    </div>
                </div>
            </section>
            <hr/>
           
            {/* <!--end Featured product--> */}
        </>
    )
}
