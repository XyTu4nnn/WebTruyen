import React from "react";

import PersonalProfile from "../author/PersonalProfile1";

import AuthorSidebar from "../author/AuthorSidebar1";

function AuthorRoute() {
  return (
    <div className="container mx-auto mt-8 flex flex-col lg:flex-row gap-6">
      <AuthorSidebar />
      <PersonalProfile />
    </div>
  );
}

export default AuthorRoute;
