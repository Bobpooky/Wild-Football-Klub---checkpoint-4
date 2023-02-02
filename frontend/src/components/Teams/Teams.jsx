import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTshirt } from "react-icons/fa";

function Teams() {
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    shirt: "",
  });

  const [teams, setTeams] = useState([]);

  const getTeams = () => {
    axios
      .get("http://localhost:5000/team")
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getTeams();
  }, []);

  const postTeam = (data) => {
    axios
      .post("http://localhost:5000/team", data)
      .then(() => {
        // clearInputs();
        // getTeams();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  function handleCreateTeam() {
    postTeam(teamDetails);
  }

  return (
    <div className="teamMng_container">
      <div className="teamMng_container_formCtn">
        <div>Add a new team!</div>
        <form
          className="teamMng_container_formCtn_form"
          action=""
          onSubmit={handleCreateTeam}
        >
          <label htmlFor="name"> Name</label>
          <input
            className="teamMng_container_formCtn_form_input"
            type="text"
            id="teamName"
            onChange={(e) =>
              setTeamDetails({ ...teamDetails, teamName: e.target.value })
            }
            required
          />
          <label htmlFor="pseudo">Shirt color</label>
          <input
            className="teamMng_container_formCtn_input color"
            type="color"
            id="shirt"
            value="#f08080"
            onChange={(e) =>
              setTeamDetails({ ...teamDetails, shirt: e.target.value })
            }
          />
          <button
            className="teamMng_container_formCtn_btn"
            type="submit"
            value="Create"
          >
            Create!!
          </button>
        </form>
      </div>

      <div className="teamMng_container_teamDisplay">
        <div className="bobby">Your current teams</div>
        <div className="teamMng_container_teamDisplay_cardCtn">
          {teams.map((t) => (
            <div className="teamMng_container_teamDisplay_cardCtn_card">
              <FaTshirt
                style={{ color: t.shirt }}
                className="teamMng_container_teamDisplay_cardCtn_shirt"
              />
              <div className="teamMng_container_teamDisplay_cardCtn_name">
                {t.teamName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
