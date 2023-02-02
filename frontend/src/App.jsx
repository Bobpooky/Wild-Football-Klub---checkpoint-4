import { Routes, Route } from "react-router-dom";
import ManageTeams from "@pages/ManageTeamsAndPlayers";
import ManageClub from "@pages/ManageClub";
import Match from "@pages/Match";
import Accueil from "@pages/Accueil";
import Navbar from "@components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ManageTeams" element={<ManageTeams />} />
        <Route path="/ManageClub" element={<ManageClub />} />
        <Route path="/Match" element={<Match />} />
      </Routes>
    </div>
  );
}

export default App;
