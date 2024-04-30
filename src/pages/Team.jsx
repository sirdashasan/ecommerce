import React from "react";
import TeamText from "../components/TeamComponents/TeamText";
import TeamPersonCard from "../components/TeamComponents/TeamPersonCard";

const Team = () => {
  return (
    <div>
      <div>
        <TeamText />
      </div>
      <div className="mt-12">
        <TeamPersonCard />
      </div>
    </div>
  );
};

export default Team;
