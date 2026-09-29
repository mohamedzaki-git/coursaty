import '../../styles/cart.css';

const Cart = () => {
    return (
        <section className="h-100  cart overflow-hidden" style={{ backgroundColor: '#eee' }}>
            <div className="container-xxl py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">

                                <div className="row">

                                    <div className="col-lg-7">
                                        <h5 className="mb-3">
                                            <a href="#!" className="text-body">
                                                <i className="fas fa-long-arrow-alt-left ms-2"></i>الاستمرار في التسوق
                                            </a>
                                        </h5>
                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">عربة التسوق</p>
                                                <p className="mb-0">لديك 4 عناصر في عربة التسوق</p>
                                            </div>
                                            <div>
                                                <button className='btn btn-danger'>حذف الكل</button>
                                            </div>
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <img
                                                                src="https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png"
                                                                className="img-fluid rounded-3"
                                                                alt="عنصر التسوق"
                                                                style={{ width: '65px' }}
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h5> كورس ريأكت </h5>
                                                            <p className="small mb-0"> 22 فيديو  </p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: '50px' }}>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <h5 className="mb-0">$900</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: '#cecece' }}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <img
                                                                src="https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png"
                                                                className="img-fluid rounded-3"
                                                                alt="عنصر التسوق"
                                                                style={{ width: '65px' }}
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h5>  كتاب C++ </h5>
                                                            <p className="small mb-0"> 150 صقحه  </p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: '50px' }}>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <h5 className="mb-0">$900</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: '#cecece' }}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* يمكنك إضافة المزيد من العناصر بطريقة مشابهة */}

                                    </div>

                                    <div className="col-lg-5 mt-5">
                                        <div className="card bg-primary text-white rounded-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0">تفاصيل </h5>
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        className="img-fluid rounded-3"
                                                        style={{ width: '45px' }}
                                                        alt="الصورة الرمزية"
                                                    />
                                                </div>

                                                {/* <p className="small mb-2">نوع البطاقة</p>
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                                                </a>
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-cc-visa fa-2x me-2"></i>
                                                </a>
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-cc-amex fa-2x me-2"></i>
                                                </a>
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-cc-paypal fa-2x"></i>
                                                </a> */}

                                                {/* <form className="mt-4">
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeName"
                                                            className="form-control form-control-lg"
                                                            placeholder="اسم حامل البطاقة"
                                                        />
                                                        <label className="form-label" htmlFor="typeName">
                                                            اسم حامل البطاقة
                                                        </label>
                                                    </div>

                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeText"
                                                            className="form-control form-control-lg"
                                                            placeholder="1234 5678 9012 3457"
                                                            minLength="19"
                                                            maxLength="19"
                                                        />
                                                        <label className="form-label" htmlFor="typeText">
                                                            رقم البطاقة
                                                        </label>
                                                    </div>

                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="typeExp"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="MM/YYYY"
                                                                    minLength="7"
                                                                    maxLength="7"
                                                                />
                                                                <label className="form-label" htmlFor="typeExp">
                                                                    انتهاء الصلاحية
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="password"
                                                                    id="typeCvv"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="&#9679;&#9679;&#9679;"
                                                                    minLength="3"
                                                                    maxLength="3"
                                                                />
                                                                <label className="form-label" htmlFor="typeCvv">
                                                                    الرمز السري
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form> */}

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">المجموع الجزئي</p>
                                                    <p className="mb-2">$4798.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">الشحن</p>
                                                    <p className="mb-2">$20.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-2">المجموع الكلي (شامل الضرائب)</p>
                                                    <p className="mb-2">$4818.00</p>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="btn btn-info btn-block btn-lg"
                                                >
                                                    <div className="d-flex justify-content-between">
                                                        <span>$4818.00</span>
                                                        <span>
                                                            إتمام الشراء <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                                        </span>
                                                    </div>


                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
