import { useFormik } from "formik";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logo from "../../assets/images/logo/c-logo.png";
import "./register.css";
export default function Register() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let eye = useRef(null);
  let navigate = useNavigate();

  async function registerSubmit(values) {
    console.log(values);
  }

  let phoneRegExp =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "اسمك يجب أن يكون أكثر من 3 حروف")
      .max(10, "اسمك يجب أن يكون أقل من 10 حروف")
      .required("الاسم مطلوب"),
    email: Yup.string()
      .email("أدخل بريد إلكتروني صحيح")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .matches(phoneRegExp, "أدخل رقم هاتف مصري")
      .required("رقم الهاتف مطلوب"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "كلمة المرور يجب أن تبدأ بحرف كبير وأن تكون بين 6 و 11 حرفًا"
      )
      .required("كلمة المرور مطلوبة"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    validate: () => setError(null),
    onSubmit: registerSubmit,
  });

  function displayIcons(e) {
    let eYe = eye.current;
    if (e.target.value.trim() !== "") {
      e.target.nextElementSibling.classList.add("d-none");
      e.target.nextElementSibling.classList.remove("d-block");
      eYe.classList.remove("d-none");
    } else {
      e.target.nextElementSibling.classList.remove("d-none");
      e.target.nextElementSibling.classList.add("d-block");
      eYe.classList.add("d-none");
    }
  }

  function displayEye() {
    setShow(!show);
  }

  return (
    <>
      <div
        className="register d-flex justify-content-center align-items-center min-vh-100 py-5"
        dir="rtl"
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 mx-auto bg-light p-3 rounded-5 ">
              {error && (
                <div className="alert alert-danger d-flex align-items-center">
                  <i className="fa-solid fa-triangle-exclamation me-2"></i>
                  <div>
                    <p>{error}</p>
                    <span>يرجى اختيار عنوان بريد إلكتروني مختلف.</span>
                  </div>
                </div>
              )}
              {success && (
                <div className="alert alert-success d-flex align-items-center">
                  <i className="fa-solid fa-circle-check me-2"></i>
                  <div>
                    <p>{success}</p>
                  </div>
                </div>
              )}

              <img src={logo} className="w-25 d-flex mx-auto" alt="" />
              <h2
                className="fw-bold text-center mt-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                إنشاء حساب جديد
              </h2>
              <p className="text-muted ">
                بعد إنشاء حساب داخل منصة كورساتي سوف تستطيع دراسة أكثر من دورة
                تدريبية وإمكانية إستخراج شهادة مُعتمدة مجانا
              </p>
              <form
                onSubmit={formik.handleSubmit}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* Name */}
                <div className="mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="الاسم"
                    onKeyUp={displayIcons}
                  />
                  <i className="fa fa-user position-absolute top-50 start-0 translate-middle-y ms-2"></i>
                  {!formik.errors.name && formik.touched.name && (
                    <span className="text-success fw-bold">
                      <i className="fa-solid fa-circle-check mx-2 mt-3"></i>تمت
                      الموافقة على اسمك
                    </span>
                  )}
                </div>
                {formik.errors.name && formik.touched.name && (
                  <span className="text-danger">
                    <i className="fa-solid fa-circle-xmark mx-2 mb-3"></i>
                    {formik.errors.name}
                  </span>
                )}

                {/* Email */}

                <div className="mb-3 position-relative">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="البريد الإلكتروني"
                    onKeyUp={displayIcons}
                  />
                  <i className="fa-solid fa-at position-absolute top-50 start-0 translate-middle-y ms-2"></i>
                  {!formik.errors.email && formik.touched.email && (
                    <span className="text-success fw-bold">
                      <i className="fa-solid fa-circle-check mx-2 mt-3"></i>
                      البريد الإلكتروني صحيح
                    </span>
                  )}
                </div>
                {formik.errors.email && formik.touched.email && (
                  <span className="text-danger">
                    <i className="fa-solid fa-circle-xmark  mx-2 mb-3"></i>
                    {formik.errors.email}
                  </span>
                )}
                {/* Phone */}
                <div className="mb-3 position-relative">
                  <input
                    type="tel"
                    className="form-control text-end"
                    name="phone"
                    id="phone"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="رقم الهاتف"
                    onKeyUp={displayIcons}
                  />
                  <i className="fa-solid fa-phone position-absolute top-50 start-0 translate-middle-y ms-2"></i>
                  {!formik.errors.phone && formik.touched.phone && (
                    <span className="text-success fw-bold">
                      <i className="fa-solid fa-circle-check mx-2 mt-3"></i>رقم
                      الهاتف صحيح
                    </span>
                  )}
                </div>
                {formik.errors.phone && formik.touched.phone && (
                  <span className="text-danger">
                    <i className="fa-solid fa-circle-xmark mx-2 mb-3"></i>
                    {formik.errors.phone}
                  </span>
                )}

                <div className="mb-3 position-relative">
                  <input
                    type={show ? "text" : "password"}
                    className="form-control"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="كلمة المرور"
                    onKeyUp={displayIcons}
                  />
                  <i className="fa-solid fa-lock position-absolute top-50 start-0 translate-middle-y ms-2"></i>
                  <i
                    ref={eye}
                    onClick={displayEye}
                    className="fa-solid fa-eye position-absolute top-50 start-0 translate-middle-y d-none"
                  ></i>
                  {!formik.errors.password && formik.touched.password && (
                    <span className="text-success fw-bold">
                      <i className="fa-solid fa-circle-checkmx-2 mt-3"></i>كلمة
                      المرور صحيحة
                    </span>
                  )}
                </div>
                {formik.errors.password && formik.touched.password && (
                  <span className="text-danger">
                    <i className="fa-solid fa-circle-xmark mx-2 mb-3"></i>
                    {formik.errors.password}
                  </span>
                )}

                <button type="submit" className="btn text-white  w-100">
                  {isLoading ? <div>جاري التحميل...</div> : "انشاء حساب جديد"}
                </button>
                <button type="submit" className="btn    w-100">
                  {isLoading ? (
                    <div>جاري التحميل...</div>
                  ) : (
                    <>
                      إنشاء حساب جديد عن طريق جوجل
                      <i className="fab text-danger fa-google me-2"></i>
                    </>
                  )}
                </button>
              </form>

              <div className="text-center mt-3">
                <span className="text-muted">هل لديك حساب بالفعل؟ </span>
                <Link to="/login" className="fw-bold">
                  تسجيل الدخول
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
