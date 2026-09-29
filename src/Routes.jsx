import { createHashRouter, redirect, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage/AboutPage";
import ArticlePage from "./pages/Article/ArticlePage";
import BookDetails from "./pages/Books/BookDetails/BookDetails";
import BooksPage from "./pages/Books/BooksPage";
import Cart from "./pages/Cart/Cart";
import ContactPage from "./pages/Contact/ContactPage/ContactPage";
import CourseDetails from "./pages/Courses/CourseDetails/CourseDetails";
import CoursesPage from "./pages/Courses/CoursesPage/CoursesPage";
import AddInstructorForm from "./pages/Dashboard/components/AddInstructorForm";
import CoursesAdmin from "./pages/Dashboard/components/CoursesAdmin";
import Instructors from "./pages/Dashboard/components/Instructors";
import Students from "./pages/Dashboard/components/Students";
import LayoutAdmin from "./pages/Dashboard/LayoutAdmin/LayoutAdmin";
import AddArticle from "./pages/Dashboard/pages/AddArticel";
import AddReview from "./pages/Dashboard/pages/AddReviwe";
import HomeDashboard from "./pages/Dashboard/pages/HomeDashboard";
import EventPage from "./pages/Events/EventPage";
import HomePage from "./pages/Home/HomePage/HomePage";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import Login from "./pages/Login/Login";
import AddBookForm from "./pages/Profile/components/AddBookForm ";
import AddCourseForm from "./pages/Profile/components/AddCourseForm";
import InstructorCourses from "./pages/Profile/components/InstructorCourses";
import ProfileInstructor from "./pages/Profile/components/ProfileInstructor";
import LayoutAccount from "./pages/Profile/LayoutAccountPage/LayoutAccount";
import ProfileInstructorPage from "./pages/Profile/ProfileInstructorPage/ProfileInstructorPage";
import ProfileUserPage from "./pages/Profile/ProfileUserPage/ProfileUserPage";
import Register from "./pages/Register/Register";
import ServicesPage from "./pages/Services/ServicesPage";

const Routes = () => {
    const routers = createHashRouter([
        {
            path: "",
            element: <LayoutPage />,

            children: [
                { index: true, loader: () => redirect("home") },
                { path: "home", element: <HomePage /> },
                { path: "about", element: <AboutPage /> },
                { path: "courses", element: <CoursesPage /> },
                { path: "events", element: <EventPage /> },
                { path: "services", element: <ServicesPage /> },
                { path: "contact", element: <ContactPage /> },
                { path: "books", element: <BooksPage /> },
                { path: "article", element: <ArticlePage /> },
                { path: "book-details", element: <BookDetails /> },
                { path: "cart", element: <Cart /> },
                { path: "register", element: <Register /> },
                { path: "login", element: <Login /> },
                { path: "course-details", element: <CourseDetails /> },
            ],
        },

        /* ========== Account ========== */

        {
            path: "account",
            element: <LayoutAccount />,
            children: [
                { path: "user", element: <ProfileUserPage /> },
                {
                    path: "teacher",
                    element: <ProfileInstructorPage />,
                    children: [
                        { index: true, loader: () => redirect("profile") },
                        { path: "profile", element: <ProfileInstructor /> },
                        { path: "courses-instructor", element: <InstructorCourses /> },
                        { path: "add-course", element: <AddCourseForm /> },
                        { path: "add-book", element: <AddBookForm /> },

                    ],
                },
            ],
        },


        /* ========== Admin ========== */


        {
            path: "admin",
            element: <LayoutAdmin />,
            children: [
                { path: "", element: <HomeDashboard />, index: true },
                { path: "courses-admin", element: <CoursesAdmin /> },
                { path: "students", element: <Students /> },
                { path: "instructors", element: <Instructors /> },
                { path: "add-instructor", element: <AddInstructorForm /> },
                { path: "add-articel", element: <AddArticle /> },
                { path: "add-review", element: <AddReview /> },

            ],
        }
    ]);

    return <RouterProvider router={routers} />;
}

export default Routes;
