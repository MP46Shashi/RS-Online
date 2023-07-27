
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
export default function News() {
    const options = {
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    }
  return (
    <>
         <section class="py-4">
                        <div class="container">
                            <div class="separator pb-4">
                                <div class="line"></div>
                                <h5 class="mb-0 fw-bold separator-title">Latest News</h5>
                                <div class="line"></div>
                            </div>
                            <div class="product-grid">
                             <OwlCarousel class="latest-news owl-carousel owl-theme" margin={10} items={"4"} loop={true} mouseDrag={true} dots={false} autoplay={true}
                    {...options} nav>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/01.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/02.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/03.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/04.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/05.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/06.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </section>
                    {/* <!--end News--> */}

    </>
  )
}
