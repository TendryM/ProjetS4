import { useNavigate } from "react-router-dom";

export default function Memory() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2 style={{ color: "#1cb0f6" }}>🎮 Module : Jeu du Memory</h2>
      <p style={{ color: "#777", marginBottom: "30px" }}>
        [Espace de jeu : Logique du Memory en cours d'intégration]
      </p>
      
      {/* Un bouton de retour rapide */}
      <button onClick={() => navigate("/catalogue")} className="btn-play">
        ⬅️ Retour au catalogue
      </button>
    </div>
  );
}