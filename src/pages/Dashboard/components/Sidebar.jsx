import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo/c-logo.png';
import '../../../styles/dashboard.css';
const Sidebar = () => {
    return (
        <aside className=" shadow p-0  p-md-3" style={{ minHeight: "100vh" }}>
            <img src={logo} alt="coursaty" />
            <ul className="nav flex-column px-0 py-5">
                <li className="nav-item ">
                    <Link className="nav-link  d-flex gap-3 align-items-center " to="/admin">
                        <i className="fa fa-home"></i>
                        <span className="d-none d-md-block">الرئيسية</span>
                    </Link>
                </li>

                <li className="nav-item  ">
                    <Link className="nav-link d-flex gap-3 align-items-center " to="/admin/courses-admin">
                        <i className="fa-brands fa-discourse"></i>
                        <span className=" d-none d-md-block">الكورسات</span>
                    </Link>
                </li>

                <li className="nav-item   ">
                    <Link className="nav-link  d-flex gap-3 align-items-center " to="/admin/instructors">
                        <i className="fa-solid fa-person-chalkboard"></i>
                        <span className=" d-none d-md-block">المحاضرين</span>
                    </Link>
                </li>

                <li className="nav-item  ">
                    <Link className="nav-link  d-flex gap-3 align-items-center " to="/admin/students">
                        <i className="fa-solid fa-chalkboard-user"></i>

                        <span className="d-none d-md-block">الطلاب</span>
                    </Link>
                </li>


                <li className="nav-item  ">
                    <Link className="nav-link  d-flex gap-3 align-items-center " to="/admin/add-articel">
                        <i className="fa-solid fa-chalkboard-user"></i>

                        <span className="d-none d-md-block">اضافة مقاله</span>
                    </Link>
                </li>


                <li className="nav-item  ">
                    <Link className="nav-link  d-flex gap-3 align-items-center " to="/admin/add-review">
                        <i className="fa-solid fa-chalkboard-user"></i>

                        <span className="d-none d-md-block">اضافه رأي</span>
                    </Link>
                </li>

                {/* <li className="nav-item   ">
                    <Link className="nav-link  d-flex gap-3 align-items-center " to="/admin/add-course">
                        <i className="fa-solid fa-video"></i>
                        <span className=" d-none d-md-block">إضافة كورس</span>
                    </Link>
                </li>

                <li className="nav-item    ">

                    <Link className="nav-link d-flex  gap-3 align-items-center " to="/admin/add-instructor">
                        <i className="fa-solid fa-user-plus"></i>

                        <span className=" d-none d-md-block ">إضافة محاضر</span>
                    </Link>
                </li> */}

                <li className="nav-item    ">

                    <Link className="nav-link d-flex  gap-3 align-items-center " to="/">
                        <i className="fa-solid fa-power-off"></i>
                        <span className=" d-none d-md-block "> كورساتي</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
