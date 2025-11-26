import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Home from "./Pages/Student/Home";
import CourseList from "./Pages/Student/CourseList";
import CourseDetails from "./Pages/Student/CourseDetails";
import MyEnrollment from "./Pages/Student/MyEnrollment";
import Loading from "./Components/Student/Loading";
import Educator from "./Pages/Educator/Educator";
import Dashboard from "./Pages/Educator/Dashboard";
import AddCourse from "./Pages/Educator/AddCourse";
import MyCourse from "./Pages/Educator/MyCourse";
import StudentEnrollments from "./Pages/Educator/StudentEnrollments";
import Navbar from "./Components/Student/Navbar";

const App = () => {

  const isEducateorRoute = useMatch("/educator/*");
  return (
    <div className="text-default min-h-screen bg-white">
      {/* Navbar is always visible */}
      {!isEducateorRoute && <Navbar /> }

      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollment />} />
        <Route path="/player/:courseId" element={<MyEnrollment />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Educator Routes */}
        <Route path="/educator" element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourse />} />
          <Route path="student-enrollment" element={<StudentEnrollments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
