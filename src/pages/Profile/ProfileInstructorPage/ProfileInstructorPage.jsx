

import { Link, Outlet } from "react-router-dom"

const ProfileInstructorPage = () => {
    return <>
        <nav className="nav nav-borders py-3">
            <div className="container d-flex justify-content-between">
                <div className="d-none d-md-flex">
                    <Link className="nav-link text-white ms-0" to={'/account/teacher/profile'}>الملف الشخصي</Link>
                    <Link className="nav-link  text-white" to={'/account/teacher/courses-instructor'}>كورساتي</Link>
                    <Link className="nav-link  text-white" to={'/account/teacher/add-course'}>اضافه كورس</Link>
                    <Link className="nav-link  text-white" to={'/account/teacher/add-book'}>اضافه كتاب</Link>
                    <Link className="nav-link  text-white" to={'/'}>الرئيسية</Link>
                </div>
                <div className="dropdown mx-auto mx-md-0">
                    <button
                        className="btn text-info dropdown-toggle d-flex align-items-center"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src='https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/298788431_3339666233024829_5300832238760280771_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xgJJ_pQaQ7gQ7kNvgHR9tFC&_nc_ht=scontent.fcai22-1.fna&_nc_gid=AUBkRBw_vQsDKv6XjS2z5yo&oh=00_AYDi-FtHiHtZTZfZeZc_63kJ0CJ7IeHYMOIShNTgKLHEHg&oe=66E3C7BF'
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <span className="ms-2">Mohamed Zaki</span>
                    </button>
                    <ul className="dropdown-menu  w-100 text-center" aria-labelledby="dropdownMenuButton">
                        <li><Link className="dropdown-item text-danger fw-bold" href="#/logout">تسجيل الخروج</Link></li>

                        <li><Link className="nav-link d-block d-md-none ms-0" to={'/account/teacher/teacher-profile'}>الملف الشخصي</Link></li>
                        <li><Link className="nav-link  d-block d-md-none" to={'/account/teacher/teacher-courses'}>كورساتي</Link></li>
                        <li><Link className="nav-link  d-block d-md-none" to={'/'}>الرئيسية</Link></li>
                    </ul>
                </div>
            </div>
        </nav>


        <hr className="mt-0 mb-4" />
        <div className="container-xxl overflow-hidden">
            <div className="row g-5">

                <Outlet />
            </div>

        </div>

    </>
}

export default ProfileInstructorPage