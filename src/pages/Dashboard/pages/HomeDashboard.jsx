import { useState } from "react";
import Statistics from "../components/Statistics";

const HomeDashboard = () => {
    const [students, setStudents] = useState(100); // Replace with actual data
    const [instructors, setInstructors] = useState(10); // Replace with actual data
    const [courses, setCourses] = useState(15); // Replace with actual data



    return <>

        <div className="container">
            <Statistics students={students} instructors={instructors} courses={courses} />

        </div>
    </>



};

export default HomeDashboard;
