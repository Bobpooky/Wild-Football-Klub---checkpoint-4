import React from "react";
import Players from "@components/Players/Players";
import Teams from "@components/Teams/Teams";

function TeamAndPlayers() {
  return (
    <div className="TeamsAndPlayers_ctn">
      <Teams className="TeamsAndPlayers_ctn_teams" />
      <Players className="TeamsAndPlayers_ctn_players" />
    </div>
  );
}

export default TeamAndPlayers;
