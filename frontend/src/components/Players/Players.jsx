import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTshirt } from "react-icons/fa";

function Players() {
  const [players, setPlayers] = useState([]);
  const [playerDetails, setPlayerDetails] = useState({
    name: "",
    pseudo: "",
    number: "",
    attaque: "",
    defense: "",
  });

  function clearInputs() {
    setPlayerDetails({
      name: "",
      pseudo: "",
      number: "",
      attaque: "",
      defense: "",
    });
  }
  const getPlayers = () => {
    axios
      .get("http://localhost:5000/player")
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const postPlayer = (data) => {
    axios
      .post("http://localhost:5000/player", data)
      .then(() => {
        clearInputs();
        getPlayers();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    postPlayer(playerDetails);
  };

  return (
    <div className="players_container">
      <div className="players_container_formCtn">
        <div>Add a new player!</div>
        <form
          className="players_container_formCtn_form"
          action=""
          onSubmit={handleUpload}
        >
          <label htmlFor="name"> Name</label>
          <input
            className="players_container_formCtn_form_input"
            type="text"
            id="name"
            onChange={(e) =>
              setPlayerDetails({ ...playerDetails, name: e.target.value })
            }
            required
          />
          <label htmlFor="pseudo">Pseudo</label>
          <input
            className="players_container_formCtn_input"
            type="text"
            id="pseudo"
            onChange={(e) =>
              setPlayerDetails({ ...playerDetails, pseudo: e.target.value })
            }
          />
          <label htmlFor="number">Number</label>
          <input
            className="players_container_formCtn_input"
            type="text"
            id="number"
            onChange={(e) =>
              setPlayerDetails({ ...playerDetails, number: e.target.value })
            }
            required
          />
          <label htmlFor="attaque">Attaque</label>
          <input
            className="players_container_formCtn_input"
            type="text"
            id="attaque"
            onChange={(e) =>
              setPlayerDetails({ ...playerDetails, attaque: e.target.value })
            }
            required
          />
          <label htmlFor="defense">Defense</label>
          <input
            className="players_container_formCtn_input"
            type="text"
            id="defense"
            onChange={(e) =>
              setPlayerDetails({ ...playerDetails, defense: e.target.value })
            }
            required
          />
          <button
            className="players_container_formCtn_btn"
            type="submit"
            value="Create"
          >
            Create!!
          </button>
        </form>
      </div>

      <div className="players_container_cardContainer">
        <div className="jeanmich">Your players</div>
        <div className="players_container_cardContainer_bobby">
          {players.map((p) => (
            <div
              key={p.id}
              className="players_container_cardContainer_bobby_card"
            >
              <div className="players_container_cardContainer_bobby_card_shirtCtn">
                <FaTshirt className="players_container_cardContainer_bobby_card_shirtCtn_shirt" />
                <div className="players_container_cardContainer_bobby_card_shirtCtn_pseudo">
                  {p.pseudo}
                </div>
                <div className="players_container_cardContainer_bobby_card_shirtCtn_number">
                  {p.number}
                </div>
              </div>
              <div className="players_container_cardContainer_bobby_card_details">
                <div>name: {p.name}</div>
                <div>attack: {p.attaque}</div>
                <div>defense: {p.defense}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Players;
