import { Outlet } from "react-router-dom"
import { CoursesProvider } from "../../../context/CoursesContext"
import { InstructorProvider } from "../../../context/InstructorContext"
import Sidebar from "../components/Sidebar"
import TopNavbar from "../components/TopNavbar"

const LayoutAdmin = () => {
    return <>
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <TopNavbar />
                <InstructorProvider>

                    <CoursesProvider>

                        <Outlet />
                    </CoursesProvider>
                </InstructorProvider>
            </div>

        </div>


    </>
}

export default LayoutAdmin
