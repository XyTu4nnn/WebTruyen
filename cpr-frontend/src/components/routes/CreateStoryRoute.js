// src/components/routes/CreateStoryRoute.js
import React from "react";

import CreateStorySidebar2 from "../CreateStory/CreateStorySidebar2";
import PersonalProfile2 from "../CreateStory/PersonalProfile2";
function CreateStoryRoute() {
  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row gap-6">
      <CreateStorySidebar2 />
      <PersonalProfile2 />
    </div>
  );
}

export default CreateStoryRoute;
