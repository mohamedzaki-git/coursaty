import { createContext, useContext, useState } from "react";

export const InstructorContext = createContext({});

export const InstructorProvider = ({ children }) => {
    const [instructors, setInstructors] = useState("INSTRACTURS");


    return (
        <InstructorContext.Provider value={{ instructors, setInstructors }}>
            {children}
        </InstructorContext.Provider>
    );
};


export const useInstructorContext = () => {
    return useContext(InstructorContext)
}