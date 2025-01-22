import React from "react";
import PersonalProfile from "../CreateStory/PersonalProfile2";
import AuthorSidebar from "../author/AuthorSidebar1";
function CreateStoryRoute() {
  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row gap-6">
      <AuthorSidebar />
      <PersonalProfile />
    </div>
  );
}

export default CreateStoryRoute;
