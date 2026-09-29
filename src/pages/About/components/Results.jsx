import { Link } from "react-router-dom";
import iconPlay from '../../../assets/images/Facts/play-icon.png';

const Results = () => {
    return (
        <>
            <section className="our-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-section">
                                        <h2>بعض الحقائق عن <span className="text-white">كورساتي</span></h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="count-area-content percentage">
                                                <div className="count-digit">+6000</div>
                                                <div className="count-title">متدربي المهارات الشخصية</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="count-area-content">
                                                <div className="count-digit">+2000</div>
                                                <div className="count-title">متدربي اللغة الإنجليزية</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="count-area-content new-students">
                                                <div className="count-digit">+500</div>
                                                <div className="count-title">متدربي البرمجة</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="count-area-content">
                                                <div className="count-digit">+500</div>
                                                <div className="count-title">تدريب المدربين (TOT)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center ">
                            <div className="video">
                                <Link to={'/'} target="_blank"><img src={iconPlay} alt="مشاهدة الفيديو" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Results;
