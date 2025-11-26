import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Educator Panel</h1>
      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export default Educator;
