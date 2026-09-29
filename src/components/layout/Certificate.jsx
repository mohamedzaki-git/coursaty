import { Link } from "react-router-dom"
import '../../styles/certificate.css'
const Certificate = () => {
    return <>

        <div className="certificate">
            <div className="container-xxl">
                <div className="title-section">
                    <h2>الشهادات المقدمة لك</h2>
                </div>
                <div className="row pt-5 g-3">
                    <div className="col-md-6 col-lg-5 offset-lg-1">
                        <div className="item shadow not-free">

                            <h4>شهادات مدفوعه</h4>
                            <p>احصل علي شهادة معتمده تثبت مهاراتك</p>
                            <Link className="d-flex justify-content-center align-items-center gap-2" to={'/'} >
                                <span>    تصفح الدورات التدريبيه الان</span>
                                <i className="mt-1 fa-solid fa-arrow-left"></i>
                            </Link>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span>توثيق رسمي</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span> دعم مخصص</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span>  اضافه مميزه لسيرتك</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span> تجربه تعليميه افضل</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Free */}
                    <div className="col-md-6 col-lg-5">
                        <div className="item free shadow">
                            <h4>شهادات مجانية</h4>
                            <p>    اتبت انك اجتزت جميع مراحل التعم </p>
                            <Link className="d-flex justify-content-center align-items-center gap-2" to={'/'} >
                                <span>    تصفح الدورات التدريبيه الان</span>
                                <i className="mt-1 fa-solid fa-arrow-left"></i>
                            </Link>                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span> اثبات اتمام الدورة</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span> تعزيز سيرتك الذاتيه</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span>تحفيز للتعلم</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span> متاحه للجميع</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
}

export default Certificate