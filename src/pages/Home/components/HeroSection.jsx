import { Link } from 'react-router-dom';
import '../../../styles/home.css';

const HeroHeader = () => {
    return <>
        <header className='home p-1'>
            <div className="container  ">
                <div className="row w-75 mx-auto  d-flex justify-content-center ">
                    <div className=" text-center">
                        <span className='text-light '>
                            <i className="fa-solid fa-check "></i>
                            منصة التعليم الأكثر ثقة

                        </span>
                        <h1 className="text-white mb-4  ">تعلم البرمجة بسهولة واحتراف</h1>
                        {/* <p className="text-white pb-3  ">استكشف دوراتنا المتنوعة في البرمجة وتكنولوجيا المعلومات. تعلم من أفضل الخبراء وابدأ في بناء مسيرتك المهنية اليوم. لدينا محتوى تعليمي مخصص لجميع المستويات.</p> */}
                        <Link to="/courses" className="btn mx-2 py-2   rounded-pill me-3">ابدأ الآن</Link>
                        <Link to="/contact" className="btn mx-2 py-2  rounded-pill">اتصل بنا</Link>
                    </div>
                </div>
            </div>
        </header>

    </>

};

export default HeroHeader;

// <div className="container-xxl position-relative p-0">
//     <div className="container-xxl py-5 bg-primary hero-header mb-5">
//         <div className="container my-5 py-5 px-lg-5">
//             <div className="row g-5 py-5">
//                 <div className="col-lg-6 text-center text-lg-end">
//                     <h1 className="text-white mb-4 animated zoomIn">تعلم البرمجة بسهولة واحتراف</h1>
//                     <p className="text-white pb-3 animated zoomIn">استكشف دوراتنا المتنوعة في البرمجة وتكنولوجيا المعلومات. تعلم من أفضل الخبراء وابدأ في بناء مسيرتك المهنية اليوم. لدينا محتوى تعليمي مخصص لجميع المستويات.</p>
//                     <Link to="/courses" className="btn btn-light py-sm-3 mx-2 px-sm-5 rounded-pill me-3">ابدأ الآن</Link>
//                     <Link to="/contact" className="btn btn-outline-light mx-2 py-sm-3 px-sm-5 rounded-pill">اتصل بنا</Link>
//                 </div>
//                 <div className="col-lg-6 text-center text-lg-end position-relative">
//                     <img src={heroImage} className="img-fluid hero-image" alt="تدريب البرمجة" />
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>