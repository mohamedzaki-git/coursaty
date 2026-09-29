import '../../../styles/about.css';

const WhyUs = () => {
    return (
        <section className="section why-us">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <div className="title-section">
                                <h2>لماذا نحن ؟</h2>
                            </div>
                            <h3 >منصة كورساتي لتعليم البرمجة</h3>
                            <div className="content mb-0 mt-4">
                                <p>
                                    نقدم لك مجموعة من الدورات التفاعلية التي تساعدك على التعلم من خلال الأنشطة المثيرة، والاختبارات، والتمارين العملية.
                                </p>
                                <p>
                                    تعلم كيف يتم تطبيق المهارات التي تكتسبها في حياتك اليومية وفي بيئات العمل المهنية.
                                </p>
                                <p>
                                    انضم إلى مجتمعنا الداعم، وكن على تواصل مع المتعلمين الآخرين وشارك في النقاشات لتحسين تجربتك التعليمية.
                                </p>
                                <p>
                                    ابدأ رحلة تعلمك اليوم واكتشف إمكانياتك الكاملة!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                            <div className="d-block d-sm-flex align-items-center m-2">
                                <div className="icon me-4 mb-4 mb-sm-0">
                                    <i className="fas fa-rocket mt-4" style={{ fontSize: '36px' }}></i>
                                </div>
                                <div className="block">
                                    <h3 className="mb-3">محتوى تعليمي مبتكر</h3>
                                    <p className="mb-0">نقدم محتوى تعليمي مبتكر يشمل دورات شاملة تغطي جميع جوانب البرمجة بطرق تفاعلية وشيقة.</p>
                                </div>
                            </div>
                        </div>
                        <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                            <div className="d-block d-sm-flex align-items-center m-2">
                                <div className="icon me-4 mb-4 mb-sm-0">
                                    <i className="fas fa-users mt-4" style={{ fontSize: '36px' }}></i>
                                </div>
                                <div className="block">
                                    <h3 className="mb-3">مجتمع تفاعلي</h3>
                                    <p className="mb-0">انضم إلى مجتمعنا التفاعلي حيث يمكنك التواصل مع خبراء ومحترفين آخرين في مجال البرمجة.</p>
                                </div>
                            </div>
                        </div>
                        <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                            <div className="d-block d-sm-flex align-items-center m-2">
                                <div className="icon me-4 mb-4 mb-sm-0">
                                    <i className="fas fa-certificate mt-4" style={{ fontSize: '36px' }}></i>
                                </div>
                                <div className="block">
                                    <h3 className="mb-3">شهادات معتمدة</h3>
                                    <p className="mb-0">احصل على شهادات معتمدة تثبت إتقانك للمهارات التي تعلمتها، مما يعزز فرصك في سوق العمل.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
