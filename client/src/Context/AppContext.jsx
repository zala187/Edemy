import { createContext, useEffect,useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;

    const [allCourses, setAllCourses] = useState([]);
    const navigate = useNavigate();

    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){ 
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        }   );
        return totalRating / course.courseRatings.length;
    }

    //fetch all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

   useEffect(()=>{
        fetchAllCourses();
   })
    const value = {
       currency,
       allCourses,
       navigate,
       calculateRating
    };


    return (
        <AppContext.Provider value={value}>
            {props.children}  {/* ✅ Render children */}
        </AppContext.Provider>
    );
};
