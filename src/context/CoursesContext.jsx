import { createContext, useContext, useState } from "react";

export const CourseContext = createContext({});

export const CoursesProvider = ({ children }) => {
    const [courses, setCourses] = useState("abdo");


    return (
        <CourseContext.Provider value={{ courses, setCourses }}>
            {children}
        </CourseContext.Provider>
    );
};


export const useCourseContext = () => {
    return useContext(CourseContext)
}