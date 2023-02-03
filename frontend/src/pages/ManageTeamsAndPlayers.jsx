import React, { useState } from "react";
import TeamAndPlayers from "@components/TeamAndPlayers/TeamAndPlayers";

function ManageTeam() {
  const [showTeam, setShowTeam] = useState(false);

  function handleCreateTeam() {
    setShowTeam(!false);
  }
  function handlePlayers() {
    setShowTeam(false);
  }

  return (
    <div className="team_page">
      <div className="team_header"> Manager les équipes</div>
      <img
        className="team_page_vestiaire"
        src="/src/assets/Wild_vestiaire.jpg"
        alt="vestiaire"
      />

      <div className="team_container">
        <div className="team_container_btnCont">
          <button
            className={showTeam === true ? "team_container_btnCont_teamBtn" : "team_container_btnCont_teamBtnOff"}
            onClick={handleCreateTeam}
            type="button"
          >
            Create a team
          </button>
          <button
            className={showTeam === false ? "team_container_btnCont_playersBtn" : "team_container_btnCont_playersBtnOff"}
            onClick={handlePlayers}
            type="button"
          >
            Manage players & teams
          </button>
        </div>
        {showTeam ? <div>caca</div> : <TeamAndPlayers />}
      </div>
    </div>
  );
}

export default ManageTeam;
