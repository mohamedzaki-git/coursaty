import { useFormik } from "formik";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logo from "../../assets/images/logo/c-logo.png";
import "../Register/register.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let eye = useRef(null);
  let navigate = useNavigate();

  async function loginSubmit(values) {
    setIsLoading(true);
    setError(null);

    // Replace with your login logic
    console.log(values);

    setIsLoading(false);
    // Navigate to a different page on success, e.g., homepage
    navigate("/home");
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .email("أدخل بريد إلكتروني صحيح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validate: () => setError(null),
    onSubmit: loginSubmit,
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
    <div
      className="login register d-flex justify-content-center align-items-center min-vh-100 py-5"
      dir="rtl"
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 mx-auto bg-light p-3 rounded-5">
            {error && (
              <div className="alert alert-danger d-flex align-items-center">
                <i className="fa-solid fa-triangle-exclamation me-2"></i>
                <div>
                  <p>{error}</p>
                </div>
              </div>
            )}

            <img src={logo} className="w-25 d-flex mx-auto" alt="Logo" />
            <h2
              className="fw-bold text-center mt-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              تسجيل الدخول
            </h2>

            <form
              onSubmit={formik.handleSubmit}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
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
                    <i className="fa-solid fa-circle-check mx-2 mt-3"></i>البريد
                    الإلكتروني صحيح
                  </span>
                )}
              </div>
              {formik.errors.email && formik.touched.email && (
                <span className="text-danger">
                  <i className="fa-solid fa-circle-xmark  mx-2 mb-3"></i>
                  {formik.errors.email}
                </span>
              )}

              {/* Password */}
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
                  className="fa-solid mx-2 fa-eye position-absolute top-50 start-0 translate-middle-y d-none"
                ></i>
              </div>
              {!formik.errors.password && formik.touched.password && (
                <span className="text-success fw-bold">
                  <i className="fa-solid fa-circle-check mx-2 mt-1"></i>كلمة
                  المرور صحيحة
                </span>
              )}
              {formik.errors.password && formik.touched.password && (
                <span className="text-danger">
                  <i className="fa-solid fa-circle-xmark mx-2 mb-3"></i>
                  {formik.errors.password}
                </span>
              )}

              <Link className="text-start d-block">هل نسيت كلمة السر؟</Link>
              <button type="submit" className="btn text-white  w-100">
                {isLoading ? <div>جاري التحميل...</div> : " تسجيل دخول "}
              </button>
              <button type="submit" className="btn   w-100">
                {isLoading ? (
                  <div>جاري التحميل...</div>
                ) : (
                  <>
                    تسجيل دخول عن طريق جوجل
                    <i className="fab text-danger fa-google me-2"></i>
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-3">
              <span className="text-muted">ليس لديك حساب؟ </span>
              <Link to="/register" className="fw-bold">
                إنشاء حساب جديد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
