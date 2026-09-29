import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo/logo.png';
import '../../styles/footer.css';
const Footer = () => {

    return <>
        <footer className='footer'>
            <div className="container-xxl  text-white-50  pt-5 overflow-hidden">
                <div className="container py-5">
                    <div className="row g-5">

                        <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                            <img src={logo} className='w-25' alt="" />
                            <p className="text-white mt-3 fw-light fs-5  pb-3  ">استكشف دوراتنا المتنوعة في البرمجة وتكنولوجيا المعلومات. تعلم من أفضل الخبراء وابدأ في بناء مسيرتك المهنية اليوم. لدينا محتوى تعليمي مخصص لجميع المستويات.</p>

                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                            <h3 className="text-white mb-4" >تواصل معنا</h3>
                            <p className="mb-2"><i className="fa fa-map-marker-alt ms-3"></i>المنصورة</p>
                            <p className="mb-2"><i className="fa fa-phone-alt ms-3"></i>01067213189</p>
                            <p className="mb-2 text-nowrap"><i className="fa fa-envelope ms-3"></i>mohamedzakiii667@gmail.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                            <h3 className="text-white mb-4">روابط سريعة</h3>
                            <Link className="btn link text-white-50" to=""> الرئيسية</Link>
                            <Link className="btn link text-white-50" to="">اتصل بنا</Link>
                            <Link className="btn link text-white-50" to="">كورسات</Link>
                            <Link className="btn link text-white-50" to=""> خدمات</Link>
                            <Link className="btn link text-white-50" to="">معلومات عنا</Link>
                        </div>




                        <div className="col-lg-3 col-md-6" data-aos="zoom-in">
                            <h3 className="text-white mb-4">النشرة الإخبارية</h3>
                            <p>اشترك معنا</p>
                            <div className="position-relative mx-auto" >
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="بريدك الإلكتروني" />
                                <button type="button" className="btn  py-2 position-absolute top-0 start-0 mt-2 ms-2">اشترك</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="copyright" >
                        <div className=" text-center  mb-3 mb-md-0">
                            &copy;
                            <span className='ms-2'> جميع الحقوق محفوظة</span>
                            <Link target='_blank' to="https://www.linkedin.com/in/abdelrahman-ali-b3a343284/">Mohamed Zaki</Link>
                        </div>

                    </div>
                </div>
            </div >

        </footer >
    </>


};

export default Footer;