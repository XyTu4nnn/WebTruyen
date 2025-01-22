import React from "react";

import AdminSidebar from "../admin/AdminSidebar";
import PersonalProfile from "../admin/PersonalProfile";

function AdminRoute() {
  return (
    <div className="container mx-auto mt-8 flex flex-col lg:flex-row gap-6">
      <AdminSidebar />
      <PersonalProfile />
    </div>
  );
}

export default AdminRoute;
