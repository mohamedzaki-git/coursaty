

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className="testimonials overflow-hidden position-relative">
            <div className="container-xxl">
                <div className="title-section">
                    <h2> اسمع أراء طلاب كورساتي</h2>
                </div>
                <Slider {...settings} >
                    <div className="col-md-6 p-4">
                        <div className="testimonials-item shadow rounded-5 text-center">
                            <p>شرح وافي جدا للماده العلميه من خبرتي الكبيره ف الوهان في الكورسات المخلفه عربي واجانب ارشح المسار لانه بيديك الاساسيات الكافيه لبناء الموقع وبيناقش بعد المواضيع المتقدمه </p>
                            <span>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                            </span>
                            <h5>Mohamed Zaki</h5>
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="testimonials-item shadow rounded-5 text-center">
                            <p>شرح وافي جدا للماده العلميه من خبرتي الكبيره ف الوهان في الكورسات المخلفه عربي واجانب ارشح المسار لانه بيديك الاساسيات الكافيه لبناء الموقع وبيناقش بعد المواضيع المتقدمه </p>
                            <span>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                            </span>
                            <h5>Mohamed Zaki</h5>
                        </div>
                    </div>
                </Slider>
            </div>

        </section>
    );
}

export default Testimonials;
