import { useRef, useState } from 'react';
import one from '../../assets/images/partners/1.png';
import ten from '../../assets/images/partners/10.png';
import eleven from '../../assets/images/partners/11.png';
import twelve from '../../assets/images/partners/12.png';
import thirteen from '../../assets/images/partners/13.png';
import fourteen from '../../assets/images/partners/14.png';
import fifteen from '../../assets/images/partners/15.png';
import sixteen from '../../assets/images/partners/16.png';
import seventeen from '../../assets/images/partners/17.png';
import eighteen from '../../assets/images/partners/18.png';
import nineteen from '../../assets/images/partners/19.png';
import two from '../../assets/images/partners/2.png';
import twenty from '../../assets/images/partners/20.png';
import twentyone from '../../assets/images/partners/21.png';
import twentytwo from '../../assets/images/partners/22.png';
import twentythree from '../../assets/images/partners/23.png';
import twentyfour from '../../assets/images/partners/24.png';
import twentyfive from '../../assets/images/partners/25.png';
import three from '../../assets/images/partners/3.png';
import four from '../../assets/images/partners/4.png';
import five from '../../assets/images/partners/5.png';
import six from '../../assets/images/partners/6.png';
import seven from '../../assets/images/partners/7.png';
import eight from '../../assets/images/partners/8.png';
import nine from '../../assets/images/partners/9.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Array of partners with names
const partners = [
    { src: one, name: "Partner 1" },
    { src: two, name: "Partner 2" },
    { src: three, name: "Partner 3" },
    { src: four, name: "Partner 4" },
    { src: five, name: "Partner 5" },
    { src: six, name: "Partner 6" },
    { src: seven, name: "Partner 7" },
    { src: eight, name: "Partner 8" },
    { src: nine, name: "Partner 9" },
    { src: ten, name: "Partner 10" },
    { src: eleven, name: "Partner 11" },
    { src: twelve, name: "Partner 12" },
    { src: thirteen, name: "Partner 13" },
    { src: fourteen, name: "Partner 14" },
    { src: fifteen, name: "Partner 15" },
    { src: sixteen, name: "Partner 16" },
    { src: seventeen, name: "Partner 17" },
    { src: eighteen, name: "Partner 18" },
    { src: nineteen, name: "Partner 19" },
    { src: twenty, name: "Partner 20" },
    { src: twentyone, name: "Partner 21" },
    { src: twentytwo, name: "Partner 22" },
    { src: twentythree, name: "Partner 23" },
    { src: twentyfour, name: "Partner 24" },
    { src: twentyfive, name: "Partner 25" }
];

const OurPartners = () => {
    const half = Math.ceil(partners.length / 2);
    const firstHalf = partners.slice(0, half);
    // const secondHalf = partners.slice(half);
    const [autoplay, setAutoplay] = useState(true);
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    // let reverseSettings = {
    //     ...settings,
    //     rtl: true
    // };

    const handlePlayPause = () => {
        if (autoplay) {
            sliderRef.current.slickPause();
        } else {
            sliderRef.current.slickPlay();
        }
        setAutoplay(!autoplay);
    };
    return (
        <section className="partners overflow-hidden position-relative">
            <div className="container-xxl">
                <div className="title-section">
                    <h2>شركائنا</h2>
                </div>
                <div className="row py-3">
                    <Slider {...settings} ref={sliderRef}>
                        {firstHalf.map((partner, index) => (
                            <div key={index} className="partner-item">
                                <img src={partner.src} alt={partner.name} />
                                <div className="partner-name">{partner.name}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button className='play' onClick={handlePlayPause}>
                    {autoplay ? <i className='fa fa-pause'></i>
                        : <i className='fa fa-play'></i>}
                </button>
                {/* <div className="row mt-3">
                    <Slider {...reverseSettings}>
                        {secondHalf.map((partner, index) => (
                            <div key={index} className="partner-item">
                                <img src={partner.src} alt={partner.name} />
                                <div className="partner-name">{partner.name}</div>
                            </div>
                        ))}
                    </Slider>
                </div> */}
            </div>
        </section>
    );
}

export default OurPartners;
